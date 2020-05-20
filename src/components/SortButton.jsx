import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {compose} from "redux";
//action
import {
    sortAsc,
    sortDesc,
} from "../actions";
//styles
import useStyles from '../styles/components/SortButtoт'

const SortButton = (props) => {
    const classes= useStyles();
    const [active, setActive] = useState({status: true, loader: false});

    useEffect(() => {
        if (active.loader) {
            if (active.status) props.sortDesc();
            else props.sortAsc();
        }
    }, [active])

    const handleClick = (event) => {
        event.preventDefault();
        setActive(prevState => ({status: !prevState.status, loader: true}))
    }

    let sort = active.status ? 'Desc' : 'Asc';
    return (
        <>
            <div>Sort by price: <a onClick={handleClick} id="sort" href="#" className={classes.products__sort} >{sort}</a></div>
        </>
    )

}

const mapDispatchToProps = {
    sortDesc,
    sortAsc,
}
export default compose(
    connect(null, mapDispatchToProps),
)(SortButton);