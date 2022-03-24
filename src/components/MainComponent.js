import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        }
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        let dishes = this.state.dishes;
        let dish = dishes.find((dish) => dish.id === this.state.selectedDish);
        const HomePage = () => {
            return (
                <div className="container">
                    <Home/>
                </div>
            )
        }
        return (
            <div className="container">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/menu" component={() => <Menu dishes={dishes}/>} />
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;
