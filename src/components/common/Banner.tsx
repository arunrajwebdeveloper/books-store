function Banner({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="banner">
      <img src={image} alt="" />
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Explore now</button>
      </div>
    </div>
  );
}

export default Banner;
