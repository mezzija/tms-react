import React from 'react'
import viewNumber from "../helpers/viewNumber";
//styles

import useStyles from '../styles/components/Cart';

const BasketCart = ({product}) => {
    const classes=useStyles();
    return (
        <>
            <div id='Content' className='container'>
                <div className={`${classes.content} row`}>
                    <div className={classes.img}>
                        <img src={product.imageLink} alt=""/>
                    </div>
                    <div  className={classes.textWidth}>
                        <p className={classes.title}>{product.title}</p>
                        <p className={classes.characteristic} dangerouslySetInnerHTML={{__html: product.description}}/>
                    </div>
                    <div className={classes.contentPrice}>
                        <p>{viewNumber(product.price.value)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BasketCart;