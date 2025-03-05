import { useRef } from "react";
import "./AddMemoPage.css";
import { API_URL } from "../config";

export default function AddMemoPage() {
  const titleRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSave = async () => {
    // make a post
    // load the viewMemoPage
    try {
      const title = titleRef.current?.textContent ?? "";
      const text = textRef.current?.textContent ?? "";
      const response = await fetch(`${API_URL}/api/memos/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, text }),
      });

      if (!response) {
        throw new Error("Failed to save memo");
      }
    } catch (e) {
      throw e;
    }
  };

  return (
    <div className="add-memo-page">
      <div className="add-memo-page-top">
        <div className="add-memo-page-top-page">Add</div>
        <button className="add-memo-page-top-profile" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="add-memo-page-content-container">
        <div className="add-memo-page-content">
          <input
            className="add-memo-page-title"
            placeholder="Title"
            ref={titleRef}
          />
          <textarea
            className="add-memo-page-text-area"
            placeholder="Insert memo here"
            ref={textRef}
          />
        </div>
      </div>
    </div>
  );
}
