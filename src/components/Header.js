import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import powerBiLogo from '../img/power-bi-logo.png';
import ButtonSecondary from './ButtonSecondary';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <img src={powerBiLogo} alt="Power BI Logo" className="header__img" />
                <div className="row">
                    <div className="header__box">
                        <h1 className="header__text">
                            <span>Reports.</span>
                            <span>Simplified.</span>
                        </h1>
                        <ButtonPrimary buttonText="Learn more" />
                        <ButtonSecondary buttonText="View reports"/>
                    </div>                    
                </div>
            </header>
        );
    }
}

export default Header;