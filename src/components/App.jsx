import React, { useEffect} from 'react';
import {bool} from 'prop-types';
import {compose} from "redux";

//HOCs
import {hot} from 'react-hot-loader/root';
import {connect} from 'react-redux';

//actions
import {getData} from "../actions";

//component
import Header from './Header.jsx';
import Main from "./Main.jsx";
import Loader from "./Loader.jsx"

//style
import '../styles/components/App.css';

const App = (props) => {
    useEffect(() => {
        props.getData();
    }, []);

    const {load} = props;

    return (
        <>
            <Loader display={load}/>
            <Header/>
            <Main/>
        </>
    )

}

const mapStateToProps = (state) => ({
    load: state.load,

});
const mapDispatchToProps = {
    getData
};

App.displayName = 'App';

App.propTypes = {
    load: bool.isRequired,
}
export default compose(
    hot,
    connect(mapStateToProps, mapDispatchToProps),
)(App);