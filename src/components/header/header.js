import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './side_drawer'
import logo from '../../photos/logo_small.jpg'



export default class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll =() =>{
       if(window.scrollY > 0){
           this.setState({
               headerShow: true
           })
       }else{
        this.setState({
            headerShow: false
        })
       }
    }
    toggleDrawer =(value) =>{
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
           <AppBar
            postion = "fixed"
            style = {{
                backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0'
            }}
           >
               <Toolbar >
                   <div className = "header_logo">
                   <img src = {logo} className = "header_logo-img"/>
                   <div>
                   <div className = "header_logo_venue">Little Star Records</div>
                      
                      <div className = "header_logo_title">Advancing the art of sound</div> 
                   </div>                      
                   </div>
                   <IconButton
                    aria-label = "Menu"
                    color = "inherit"
                    onClick = {() =>this.toggleDrawer(true)}
                   >
                   <MenuIcon />
                   </IconButton>
                   <SideDrawer
                        open = {this.state.drawerOpen}
                        onClose = {(value) => this.toggleDrawer(value)}
                   />
               </Toolbar>
                
           </AppBar>
        )
    }
}
