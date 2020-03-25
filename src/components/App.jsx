import React,{ Component } from 'react';
import { hot } from 'react-hot-loader/root';

import Header from './Headers.jsx';
import Main from "./Main.jsx";

import '../styles/components/App.css';

class App extends Component {
    render() {
        return(
            <React.Fragment>
                <Header/>
                <Main/>
            </React.Fragment>
        )
    }
}

export default hot(App);