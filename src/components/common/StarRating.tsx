const size = 18; // 18px

const Star = ({ fill = "none" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="none"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="me-1"
  >
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
  </svg>
);

const StarRating = ({ rating = 0, outOf = 5 }) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    let fill = "#e4e5e9"; // gray
    if (rating >= i) {
      fill = "#ffc107"; // yellow
    } else if (rating >= i - 0.5) {
      fill = `url(#halfGradient)`; // half star
    }

    stars.push(
      <span key={i} style={{ display: "inline-block", position: "relative" }}>
        {rating >= i - 0.5 && rating < i ? (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="halfGradient">
                <stop offset="50%" stopColor="#ffc107" />
                <stop offset="50%" stopColor="#e4e5e9" />
              </linearGradient>
            </defs>
            <polygon
              points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"
              fill="url(#halfGradient)"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <Star fill={fill} />
        )}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {stars}
    </div>
  );
};

export default StarRating;
