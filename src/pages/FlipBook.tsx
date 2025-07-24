import { useState, useRef, useEffect, type MouseEvent } from "react";
import "../assets/style/flipBook.css";
import { useNavigate } from "react-router-dom";

const images: string[] = [
  "https://www.creatopy.com/blog/wp-content/uploads/2020/07/Tiny-T.-Rex-and-the-Impossible-Hug.jpg",
  "https://oldmatemedia.com/wp-content/uploads/Girls-Can-Fly-Cover-Small-800x800.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61ioKofozHL._AC_UL600_SR600,600_.jpg",
  "https://offshootbooks.com/cdn/shop/products/91ejX7VJwuL.jpg?v=1652865080",
  "https://www.rebekahgienapp.com/wp-content/uploads/2022/10/when-lola-visits.jpg",
  "https://www.thebookwarehouse.com.au/wp-content/uploads/2022/11/image-18.jpeg",
  "https://tinybeans.com/wp-content/uploads/2017/09/9781438050195.jpg",
  "https://m.media-amazon.com/images/I/41DpYeAO+sL._UF1000,1000_QL80_.jpg",
];

const FlipBook = () => {
  const navigate = useNavigate();

  const [flippedPages, setFlippedPages] = useState<number[]>([]);
  const [isTurning, setIsTurning] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const sidebarButtonRef = useRef<HTMLButtonElement | null>(null);

  const flippingPages = useRef<Set<number>>(new Set());

  const totalSheets = Math.ceil(images.length / 2);

  const handleFlip = (forward = true) => {
    if (isTurning) return;

    const nextIndex = forward
      ? flippedPages.length * 2
      : (flippedPages.length - 1) * 2;

    if (
      nextIndex < 0 ||
      nextIndex >= images.length ||
      (forward && !images[nextIndex + 1])
    )
      return;

    if (flippingPages.current.has(nextIndex)) return;

    setIsTurning(true);
    flippingPages.current.add(nextIndex);

    setTimeout(() => {
      flippingPages.current.delete(nextIndex);
      setIsTurning(false);
    }, 1000);

    setFlippedPages((prev) => {
      if (forward) {
        return [...prev, nextIndex];
      } else {
        const updated = [...prev];
        updated.pop();
        return updated;
      }
    });
  };

  const toggleFullscreen = () => {
    const element = containerRef.current;

    if (!element) return;

    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).mozRequestFullScreen) {
        (element as any).mozRequestFullScreen();
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | globalThis.MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sidebarButtonRef.current &&
        !sidebarButtonRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const jumpToPage = (index: number) => {
    console.log("index :>> ", index);
    // Jump logic placeholder (implement logic here if needed)
    // Example: calculate how many flips are required to reach index, then update flippedPages accordingly

    setShowSidebar(false);
  };

  const isAtStart = flippedPages.length === 0;
  const isAtEnd = flippedPages.length >= totalSheets;
  const isOpened = flippedPages.length > 0;

  const bookClassName = `book-flip ${
    isAtEnd ? "last-page centered-right" : isOpened ? "centered-left" : ""
  }`;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="book-flip-container" ref={containerRef}>
      <div className="util-buttons">
        <button className="btn wide-btn" onClick={handleGoBack}>
          Go Back
        </button>
        <button
          className={`btn ${isFullscreen ? "exitfullscreen" : "fullscreen"}`}
          onClick={toggleFullscreen}
        ></button>
        <button
          ref={sidebarButtonRef}
          className={`btn ${showSidebar ? "close-sidebar" : "open-sidebar"}`}
          onClick={() => setShowSidebar((prev) => !prev)}
        ></button>
      </div>

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`sidebar ${showSidebar ? "open" : "close"}`}
      >
        <div className="sidebar-list">
          {images.map((src, idx) => (
            <div className="sidebae-item" key={`thumb-${idx}`}>
              <p className="thumb-number">{idx + 1}</p>
              <div className="thumbnail" onClick={() => jumpToPage(idx)}>
                <img src={src} alt={`Thumb ${idx + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAV BUTTONS */}
      <div className="nav-buttons">
        <button
          className="btn previous"
          onClick={() => handleFlip(false)}
          disabled={isAtStart || isTurning}
        >
          Prev
        </button>
        <button
          className="btn next"
          onClick={() => handleFlip(true)}
          disabled={isAtEnd || isTurning}
        >
          Next
        </button>
      </div>

      <div className={bookClassName}>
        {Array.from({ length: totalSheets }).map((_, sheetIndex) => {
          const i = sheetIndex * 2;
          const isFlipped = flippedPages.includes(i);
          const isFlipping = flippingPages.current.has(i);

          let zIndex: number;
          if (isFlipping) {
            zIndex = 9999;
          } else {
            zIndex = isFlipped
              ? 100 + flippedPages.indexOf(i)
              : 1000 + (totalSheets - sheetIndex);
          }

          return (
            <div
              key={i}
              className={`sheet ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(!isFlipped)}
              style={{ zIndex }}
            >
              <div className="sheet-front">
                {images[i] && (
                  <>
                    <img src={images[i]} alt={`Page ${i + 1}`} />
                    <span className="page-number left">{i + 1}</span>
                  </>
                )}
              </div>
              <div className="sheet-back">
                {images[i + 1] && (
                  <>
                    <img src={images[i + 1]} alt={`Page ${i + 2}`} />
                    <span className="page-number right">{i + 2}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlipBook;
