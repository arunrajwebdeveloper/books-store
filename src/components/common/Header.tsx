import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <h2>soarling</h2>
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <a>Stories</a>
          </li>
          <li>
            <a>Quiz</a>
          </li>
          <li>
            <a>Puzzles</a>
          </li>
        </ul>
      </nav>
      <button className="user-thumb">
        <img
          src="https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3453.jpg"
          alt=""
        />
      </button>
    </header>
  );
}

export default Header;
