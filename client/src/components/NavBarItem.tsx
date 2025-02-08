import "./NavBarItem.css";

interface NavBarItemProps {
  label: string;
  iconPath: string;
  routePath: string;
}

export default function NavBarItem(props: NavBarItemProps) {
  return (
    <div className="nav-bar-item">
      <img className="nav-bar-item-icon" src={props.iconPath} />
      <div className="nav-bar-item-label">{props.label}</div>
    </div>
  );
}
