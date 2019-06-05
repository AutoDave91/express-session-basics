import React, {Component} from 'react'
import store from "../store"

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            total: store.getState().total,
            cart: store.getState().cart,
            user: store.getState().login
        }
    }
    
    componentDidMount(){
        store.subscribe(()=>{this.setState({total: store.getState().total})})
        store.subscribe(()=>{this.setState({total: store.getState().cart})})
    }
    
    render(){
        return(
            <div className = 'CART'>
            <h1></h1>
                <h1>Items:</h1> { this.state.cart.map((product, index)=> {
                    return(
                    <ul key= {index}>
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    </ul>)
                })}
                
                <h1>Total: {this.state.total}</h1>
            </div>
        )
    }
}

export default Cart