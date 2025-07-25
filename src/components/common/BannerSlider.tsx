import Slider from "react-slick";
import Banner from "./Banner";

function BannerSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="main-banner-slider">
      <Slider {...settings}>
        <Banner
          image="https://png.pngtree.com/background/20250103/original/pngtree-a-group-of-colorful-parrots-perched-on-branches-in-a-lush-picture-image_15984697.jpg"
          title="Great Stories for Children"
          description="Ruskin Bond - The Most-loved stories by award-winning Author"
        />
        <Banner
          image="https://png.pngtree.com/background/20250215/original/pngtree-tropical-background-with-toucan-and-flowers-vector-illustration-in-the-jungle-picture-image_15794717.jpg"
          title="Great Stories for Children"
          description="Ruskin Bond - The Most-loved stories by award-winning Author"
        />
        <Banner
          image="https://png.pngtree.com/background/20250218/original/pngtree-d-colorful-macaw-parrot-sitting-on-a-branch-isolated-black-background-picture-image_15710933.jpg"
          title="Great Stories for Children"
          description="Ruskin Bond - The Most-loved stories by award-winning Author"
        />
        <Banner
          image="https://png.pngtree.com/background/20250523/original/pngtree-a-vibrant-red-and-blue-macaw-soars-through-lush-jungle-framed-picture-image_16541148.jpg"
          title="Great Stories for Children"
          description="Ruskin Bond - The Most-loved stories by award-winning Author"
        />
      </Slider>
    </div>
  );
}

export default BannerSlider;
