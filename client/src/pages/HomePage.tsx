import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-top">
        <div className="home-page-top-page">Home</div>
        <div className="home-page-top-profile">James</div>
      </div>
      <div className="home-page-content-container">
        <div className="home-page-content">
          <div className="home-page-content-active-title">Active</div>
          <div className="home-page-content-no-active-memo">
            <div>You have no active memo yet! </div>
            <div>Click the + button to add one</div>
          </div>
        </div>
      </div>
      <button className="home-page-add-button">+</button>
    </div>
  );
}
