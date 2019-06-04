import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from "./components/Login"
import Shop from "./components/Shop"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"
import Landing from "./components/Landing"
import Register from "./components/Register"

export default (
    <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component = {Login}></Route>
        <Route path = "/register"  component = {Register}></Route>
        <Route  path="/shop" component={Shop}></Route>
        <Route  path="/cart" component={Cart}></Route>
        <Route  path="/checkout" component={Checkout}></Route>
    </Switch>
)