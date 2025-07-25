import { Link } from "react-router-dom";
import StarRating from "../common/StarRating";
import Book from "./Book";

function BookGroup({ bookList }: { bookList: any }) {
  return (
    <div>
      {bookList?.map(({ title, books }: { title: string; books: [] }) => {
        return (
          <div className="section-group">
            <h2>{title}</h2>
            <div className="shelf-container">
              {books?.map(({ id, cover, price, pages, rating }) => (
                <Link to={`/book/${123}`} className="book-link" key={id}>
                  <Book cover={cover} />
                  <div className="book-details">
                    <div className="rating">
                      <StarRating rating={rating} />
                    </div>
                    <h3>{`Price: ₹${price}`}</h3>
                    <p>{`${pages} pages`}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookGroup;
