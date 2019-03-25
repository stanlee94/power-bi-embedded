import React from 'react';
import ButtonSecondary from './ButtonSecondary';
import starsVideo from '../img/stars.mp4';

class Report extends React.Component {
    render() {
        return(
            <section className="section-report">
                <div className="bg-video">
                    <video className="bg-video__content" autoplay="autoplay" muted loop>
                        <source src={starsVideo} type="video/mp4" />
                        Your browser is not supported!
                    </video>
                </div>
                <div className="row">
                    <h2 className="heading-secondary u-margin-bottom-medium">Power BI Embedded <span>In Action</span></h2>
                    <div className="embed-box u-margin-bottom-small">
                        <div className="text">Embedded content goes here</div>
                    </div>
                    <div className="u-center-text">
                        <ButtonSecondary buttonText="Embed"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Report;