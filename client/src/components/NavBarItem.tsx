import { Link } from "react-router-dom";
import "./NavBarItem.css";

interface NavBarItemProps {
  label: string;
  iconPath: string;
  routePath: string;
}

export default function NavBarItem(props: NavBarItemProps) {
  return (
    <Link to={props.routePath} className="nav-bar-item">
      <img className="nav-bar-item-icon" src={props.iconPath} />
      <div className="nav-bar-item-label">{props.label}</div>
    </Link>
  );
}
