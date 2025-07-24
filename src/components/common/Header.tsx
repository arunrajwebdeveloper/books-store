function Header() {
  return (
    <header className="main-header">
      <h2 className="logo">soarling</h2>
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
