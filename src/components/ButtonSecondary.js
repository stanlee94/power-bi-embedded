import React from 'react';

class ButtonSecondary extends React.Component {
    render() {
        return(
            <div className="button-secondary">
                {this.props.buttonText}
            </div>
        );
    }
}

export default ButtonSecondary;