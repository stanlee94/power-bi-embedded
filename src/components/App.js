import React from 'react';
import Header from './Header';
import About from './About';
import Report from './Report';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <About />
                <Report />
                <Footer />
            </div>
        );
    }
}

export default App;