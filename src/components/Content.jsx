import React from 'react';
import {object} from 'prop-types';

//Rouse
import {useHistory} from "react-router-dom";


//component
import BasketButton from "./BasketButton.jsx";

//style
import '../styles/components/Content.css';

//helpers
import viewNumber from "../helpers/viewNumber";


const Content = ({product}) => {

    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        history.push(`/${product.id}`);
    }
    return (
        <div id='Content' className='container'>
            <div className='content row'>
                <div className='img'>
                    <img src={product.imageLink} alt=""/>
                </div>
                <div className="textWidth">
                    <a onClick={handleClick} className='title' href="#">{product.title}</a>
                    <p className="characteristic" dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
                <div className='contentPrice'>
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