import { useEffect, useState } from "react";
import "./ViewMemoPage.css";
import { useParams } from "react-router-dom";
import { Memo } from "../types/memo";

export default function ViewMemoPage() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [memo, setMemo] = useState<Memo | undefined>(undefined);

  useEffect(() => {
    const fetchMemo = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5001/api/memo/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch memo");
        }
        const data = (await response.json()) as Memo;
        setMemo(data);
      } catch (e) {
        console.error("Error fetching memo:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMemo();
  }, []);

  const handleEdit = async () => {};

  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <div className="view-memo-page">
          <div className="view-memo-page-top">
            <div className="view-memo-page-top-page">View</div>
            <button className="view-memo-page-top-profile" onClick={handleEdit}>
              Edit
            </button>
          </div>
          <div className="view-memo-page-content-container">
            <div className="view-memo-page-content">
              <input
                className="view-memo-page-title"
                placeholder={memo?.title}
                readOnly={true}
              />
              <textarea
                className="view-memo-page-text-area"
                placeholder={memo?.text}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
