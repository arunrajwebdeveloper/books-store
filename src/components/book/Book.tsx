function Book({ cover }: { cover: string }) {
  return (
    <div className="flip-card">
      <div className="card-shell">
        <div className="flip-page-left"></div>
        <div className="flip-page-right"></div>
        <div className="flip-cover clickable-card">
          <img alt="Book cover image" src={cover} loading="lazy" />
          <div className="read-label"></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
