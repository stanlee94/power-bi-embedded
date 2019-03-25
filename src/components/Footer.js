import React from "react";
import powerBiLogo from "../img/power-bi-logo.png";

class Footer extends React.Component {
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
    this.onScrolling(".footer", "moveInBottom 1s", 400);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <footer className="footer">
        <div className="u-margin-bottom-medium">
          <img src={powerBiLogo} alt="Power BI Logo" className="footer__img" />
        </div>
        <div
          className="row"
          style={
            !this.state.isAnimated
              ? { animation: this.state.animation, opacity: this.state.opacity }
              : null
          }
        >
          <div className="col-1-of-2">
            <ul className="footer__list">
              <li className="footer__item">Desktop</li>
              <li className="footer__item">Pro</li>
              <li className="footer__item">Embedded</li>
              <li className="footer__item">Premium</li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <p className="footer__paragraph">
              This website is built using React.JS and best viewed using latest
              version of Chrome Browser.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
