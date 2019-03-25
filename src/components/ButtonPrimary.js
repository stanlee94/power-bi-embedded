import React from 'react';

class ButtonPrimary extends React.Component {
    render() {
        return(
            <div className="button-primary">
                {this.props.buttonText}
            </div>
        );
    }
}

export default ButtonPrimary;