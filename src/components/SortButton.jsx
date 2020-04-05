import  React,{Component} from 'react'

import sortArray from '../helpers/sortArray';

//styles
import '../styles/components/SortButton.css'
export default class SortButton extends Component {
    constructor(props){
        super(props);
        this.state={
            active:false,
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active: !prevState.active}),()=>this.props.sortContent(this.state.active));
    }
    render() {

        let sort = this.state.active? 'Desc':'Asc';
        return(
            <>
                <div><a href="#" className={'products__currency'}>BYN</a>Sort by price: <a  onClick={this.handleClick} id="sort" href="#" className="products__sort">{sort}</a></div>
            </>
        )
    }

}