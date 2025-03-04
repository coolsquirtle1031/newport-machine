import { formatLastModified } from "../utils/date";
import "./ActiveMemo.css";

interface ActiveMemoProps {
  id: number;
  title: string;
  lastModified: string;
  text: string;
  onClick: (id: number) => void;
}

export default function ActiveMemo(props: ActiveMemoProps) {
  const getOneLineText = (fullText: string): string => {
    if (fullText.length < 45) return fullText;
    const first45Characters = fullText.slice(0, 45);
    return first45Characters + " ...";
  };

  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div className="active-memo" onClick={handleClick}>
      <div className="active-memo-top">
        <div className="active-memo-title">{props.title}</div>
        <div className="active-memo-date">
          Last Modified: {formatLastModified(props.lastModified)}
        </div>
      </div>
      <div className="active-memo-bottom">{getOneLineText(props.text)}</div>
    </div>
  );
}
