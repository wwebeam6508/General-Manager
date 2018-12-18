import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import { Container, Content, Title, Header } from 'native-base';

import MenuRow from '../../helper/menurow.js';
const item = [
    {
        name:"Humans",
        icon:"ios-home"
    },
    {
        name:"Resource",
        icon:"ios-aperture"
    },
    {
        name:"Finance",
        icon:"ios-analytics"
    },
    {
        name:"Budget",
        icon:"ios-alert"
    },
    {
        name:"AboutUs",
        icon:"ios-alarm"
    },
    {
        name:"AboutUs",
        icon:"ios-arrow-dropright"
    },
    {
        name:"AboutUs",
        icon:"ios-arrow-dropdown"
    }
]

const col = 3

export default class HomePage extends Component {
    
    render(){
        return (
            <Container>
                <Header>
                    <Title style={styles.title}>General Manager</Title>
                </Header>
                <Content>
                    <MenuRow col={col} item={item} colstyle={styles.colstyle} rowstyle={styles.rowstyle}/>
                </Content>
                
            </Container>
        );
    }
}




const styles = StyleSheet.create({
    title:{
        fontSize:25
    },
    colstyle:{
        paddingLeft:35
    },
    rowstyle:{
        paddingTop:25
    }
})

