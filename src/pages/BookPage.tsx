import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import StarRating from "../components/common/StarRating";

function BookPage() {
  return (
    <PageLayout>
      <div className="book-details-wrapper">
        <div className="book-basic-info">
          <div className="book-thumbnail">
            <div className="book-large-mockup">
              <img
                src="https://tinybeans.com/wp-content/uploads/2017/09/9781438050195.jpg"
                alt="book thumbnail"
              />
            </div>
          </div>
          <div className="book-details-block">
            <div className="rating-element">
              <StarRating rating={4.5} />
              <span>4.5</span>
            </div>
            <h2 className="product-title">
              Children in Our World: Poverty And Hunger
            </h2>
            <p className="author">
              <span className="italic">By </span>
              <span>Looise Spilsbary</span>
            </p>

            <div className="book-price">
              Price: <span>₹1260</span>
            </div>

            <div className="more-basic-infos">
              <table>
                <tr>
                  <td>
                    <div className="info-label">Language</div>
                    <div className="info-value">English</div>
                  </td>
                  <td>
                    <div className="info-label">Format</div>
                    <div className="info-value">26cm x 26cm</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-label">Genre</div>
                    <div className="info-value">Fiction</div>
                  </td>
                  <td>
                    <div className="info-label">Publisher</div>
                    <div className="info-value">Soarling Stories</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-label">Pages</div>
                    <div className="info-value">165</div>
                  </td>
                  <td>
                    <div className="info-label">Published Date</div>
                    <div className="info-value">26-June-2023</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="info-label">Availability</div>
                    <div className="info-value">Instock</div>
                  </td>
                  <td>
                    <div className="info-label">Code</div>
                    <div className="info-value">FC-3456-ECW-4900</div>
                  </td>
                </tr>
              </table>
            </div>

            <div className="book-actions">
              <Link to="/read/123">
                <img
                  src="https://www.svgrepo.com/show/361049/book.svg"
                  alt="book icon"
                />
                <span>Read Now</span>
              </Link>
              <Link to=".">
                <img
                  src="https://www.svgrepo.com/show/491010/download-2.svg"
                  alt="download icon"
                />
                <span>Download Book</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="book-more-infos">
          <div className="info-card">
            <h2>About Author</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default BookPage;
