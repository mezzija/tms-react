import React from 'react';
import {object} from 'prop-types';

//Rouse
import {useHistory} from "react-router-dom";


//component
import BasketButton from "./BasketButton.jsx";

//style

import useStyles from '../styles/components/Cart';

//helpers
import viewNumber from "../helpers/viewNumber";


const Content = ({product}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        history.push(`/${product.id}`);
    }
    return (
        <div id='Content' className='container'>
            <div className={`${classes.content} row`}>
                <div className={classes.img}>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className={classes.textWidth}>
                    <a onClick={handleClick} className={classes.title} href="#">{product.title}</a>
                    <p className={classes.characteristic} dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
                <div className={classes.contentPrice}>
                    <p>{viewNumber(product.price.value)}</p>
                    <BasketButton product={product}/>
                </div>
            </div>
        </div>
    )

};
Content.displayName = 'Content';

Content.propTypes = {
    product: object.isRequired,
};
export default Content;