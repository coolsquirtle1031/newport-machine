import "./NavBar.css";
import homeIcon from "../images/home.png";
import playgroundIcon from "../images/playground.png";
import archiveIcon from "../images/log.png";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavBarItem routePath="test" label="Home" iconPath={homeIcon} />
      <NavBarItem
        routePath="test"
        label="Playground"
        iconPath={playgroundIcon}
      />
      <NavBarItem routePath="test" label="Archive" iconPath={archiveIcon} />
    </nav>
  );
}
