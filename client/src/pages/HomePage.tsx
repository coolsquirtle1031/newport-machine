import { memo, useEffect, useState } from "react";
import ActiveMemo from "../components/ActiveMemo";
import "./HomePage.css";
import { Memo } from "../types/memo";
import { useNavigate } from "react-router-dom";
import squirtlePath from "../images/squirtle.png";

// http://localhost:5001
// https://393e-2600-1700-74-290-c558-8d86-fd4-846b.ngrok-free.app

export default function HomePage() {
  const navigate = useNavigate();
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/memos");
        if (!response.ok) throw new Error("Failed to fetch memos");
        const fetchedMemos = await response.json();
        setMemos(fetchedMemos);
      } catch (e) {
        throw e;
      }
    };
    fetchMemos();
  }, []);

  const handleClick = () => {
    navigate("/add");
  };

  const handleClickOnMemo = (memoId: number) => {
    navigate(`/view/${memoId}`);
  };

  return (
    <div className="home-page">
      <div className="home-page-top">
        <div className="home-page-top-page">Home</div>
        <div className="home-page-top-profile">
          <img src={squirtlePath} />
        </div>
      </div>
      <div className="home-page-content-container">
        <div className="home-page-content">
          {memos.length === 0 && (
            <div className="home-page-content-no-active-memo">
              <div>You have no active memo yet! </div>
              <div>Click the + button to add one</div>
            </div>
          )}
          {memos.length > 0 && (
            <>
              <div className="home-page-content-active-title">Active</div>
              <div className="home-page-content-active-memo-container">
                {memos.map((memo) => {
                  return (
                    <ActiveMemo
                      key={memo.id}
                      id={memo.id}
                      title={memo.title}
                      lastModified={memo.last_modified}
                      text={memo.text}
                      onClick={handleClickOnMemo}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <button className="home-page-add-button" onClick={handleClick}>
        <div>+</div>
      </button>
    </div>
  );
}
