import Carousel from "react-bootstrap/Carousel";
import image from "../images/img1.jpg";

function ReviewCarousel() {
  return (
    <div>
      <div className="review-heading">
        <h2 className="testimonials">testimonials</h2>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="review">
              <h3>
                <i>"Reviewed with other DAP software and I found a winner"</i>
              </h3>
              <h4>
                <b>-T. Scott B</b>
              </h4>
              <h6>
                <i>Consultant & advisor</i>
              </h6>
              <br />
              <p>
                Hands down was the usability and non-existent learning curve. In
                our diverse spaces, we have varying degrees of knowledge and
                abilities, Ziplyne came out as my winner on most fronts. The
                software is super-easy to learn and I obtained results literally
                in minutes.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="review">
              <h3>
                <i>"Great Ux-improvement."</i>
              </h3>
              <h4>
                <b>-Aman Sharma</b>
              </h4>
              <h6>
                <i>Executive Sponsor in Marketing and Advertising</i>
              </h6>
              <br />
              <p>
                Ziplyne is designed intuitively with customer support workflows
                in mind. It incorporates ability to bring in data from existing
                data storage methods like excel. Provides integrations with
                zendesk/jira and AI capabilities to reduce repetitive support
                tasks and automation.
              </p>
              <br />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="review">
              <h3>
                <i>
                  "Highly powerful and yet easy to use tool to create in-app
                  tutorials!"
                </i>
              </h3>
              <h4>
                <b>-Joanna K</b>
              </h4>
              <h6>
                <i>Consultant & advisor</i>
              </h6>
              <br />
              <p>
                I liked how it takes almost zero technical expertise to
                understand and manage this. Using the dashboard, you can easily
                build an in-app guide tool from the bottom up, including design,
                content, look and feel, and much more. I'm able to make
                adjustments on the fly.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="side-img-container">
          <img src={image} className="side-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;
