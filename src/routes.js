import React, { Component } from 'react'
import {Route, Switch,} from 'react-router-dom'
import Home from './components/home/home'
import Layout from './hoc/layout'
import Header from './components/header/header'
import PageAbout from './components/about/pageAbout'
export default class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                   
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" exact component = {PageAbout} />
                </Switch>
            </Layout>
            
        )
    }
}
