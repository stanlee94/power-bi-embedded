import React from "react";
import laptop from "../img/power-bi-laptop.png";

class About extends React.Component {
  state = { animation: "", isAnimated: false, opacity: 0 };

  onScrolling = (section, animation, distance) => {
    const target = document.querySelector(section);
    if (target.getBoundingClientRect().top < distance) {
      this.setState({
        animation,
        opacity: 1
      });

      setTimeout(() => {
        this.setState({ isAnimated: true });
      }, 1000);
    } else {
      this.setState({ animation: "" });
    }
  };

  handleScroll = () => {
    this.onScrolling(".section-about", "moveInRight 1s", 160);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <section className="section-about">
        <div
          className="img-box"
          style={
            !this.state.isAnimated
              ? { animation: this.state.animation, opacity: this.state.opacity }
              : null
          }
        >
          <img src={laptop} alt="Power BI laptop" />
        </div>
        <div className="row">
          <div className="text-box">
            <h2 className="heading-secondary u-margin-bottom-medium">
              <span>Introducing:</span> Power BI Embedded
            </h2>

            <h3 className="heading-tertiary u-margin-bottom-xsmall">
              Overview
            </h3>
            <p className="paragraph u-margin-bottom-small">
              Power BI Embedded is a platform-as-a-service (PaaS) analytics
              solution, where developers can embed reports and dashboards into
              an application for their customers.{" "}
            </p>

            <h3 className="heading-tertiary u-margin-bottom-xsmall">
              For your customer
            </h3>
            <p className="paragraph u-margin-bottom-small">
              Embed dashboards and reports for users who don't have an account
              for Power BI (They don't even need to know its existence).
            </p>

            <h3 className="heading-tertiary u-margin-bottom-xsmall">
              Cost Effective
            </h3>
            <p className="paragraph u-margin-bottom-small">
              Pay-as-you-go feature, through a capacity-based, hourly metered
              model.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
