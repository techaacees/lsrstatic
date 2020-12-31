import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll'

export default function SideDrawer(props) {
    const scrollToElement = (elements) =>{
        scroller.scrollTo(elements, {
            duration: 1500,
            delay: 100,
            smooth: true,

        })
        
    }
    return (
        <Drawer
            anchor = "right"
            open = {props.open}
            onClose = {() =>props.onClose(false)}
        >
            <List component = "nav">
                <ListItem 
                    button
                    onClick = {() =>scrollToElement('home')}
                >
                    Home
                </ListItem>
                <ListItem 
                    button
                    onClick = {() =>scrollToElement('services')}
                >
                   Services
                </ListItem>
                <ListItem 
                    button
                    onClick = {() => scrollToElement('about')}
                >
                   About Us
                </ListItem>
                <ListItem 
                    button
                    onClick = {() =>scrollToElement('location')}
                >
                  Location
                </ListItem>
               
            </List>
        </Drawer>
    )
}
