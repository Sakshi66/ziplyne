import GetDemo from "./GetDemo";
import RequestForm from "./RequestForm";
import ReviewCarousel from "./ReviewCarousel";

function Content() {
  return (
    <div className="content-container">
      <div className="page-content">
        <div className="page-title">
          <h2 id="hero">Request a Demo</h2>
          <hr></hr>
        </div>

        <GetDemo />

        <RequestForm />

        <ReviewCarousel />
        <br />
      </div>

      <h4 className="note">
        <i>
          <b>Trusted by enterprises and providing self-serve digital help.</b>
        </i>
      </h4>
    </div>
  );
}

export default Content;
