import  React,{Component} from 'react'
import {connect} from "react-redux"

//styles
import '../styles/components/SortButton.css'
//helpers
import sortArray from '../helpers/sortArray';


class SortButton extends Component {
    constructor(props){
        super(props);
        this.state={
            active:false,
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active: !prevState.active}),()=>{
            return this.state.active?
                sortArray(this.props.products,'asc'):
                sortArray(this.props.products,'desc');

        });
    }
    render() {
        let sort = this.state.active? 'Desc':'Asc';
        console.log(this.props.products);
        return(
            <>
                <div>Sort by price: <a  onClick={this.handleClick} id="sort" href="#" className="products__sort">{sort}</a></div>
            </>
        )
    }

}
const mapStateToProps=(state)=>({
   products:state.products,
});
export default connect(mapStateToProps)(SortButton);