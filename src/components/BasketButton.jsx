import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ClassNames from 'classnames'

// style
import '../styles/components/BasketButton.css'



export default class BasketButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if(this.props.basket.productsID.find(item=>item===this.props.productId)){
            this.setState({active:true});
        }else {
            this.setState({active:false});
        }
    }

    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active: !prevState.active}),()=>{
            this.props.activeButton(this.state.active)
        });
    }

    render() {

        let text =this.state.active?"Remove from Basket":"Add to Basket";
         return(
            <a  onClick={this.handleClick} className={ClassNames('button',{'active':this.state.active})} href="#">{text}</a>
        )
    }
}
BasketButton.propTypes={
    activeButton:PropTypes.func,
};