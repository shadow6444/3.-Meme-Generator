import logo from "../../assets/troll-face.png";
import './Header.css';

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-items">
        <div className="nav-logo">
          <img src={logo} alt="meme logo" />
          <h1>Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
      </div>
    </nav>
  );
}
