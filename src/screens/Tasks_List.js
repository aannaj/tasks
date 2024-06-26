import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

import today_Image from "../../assets/imgs/today.jpg"

export default class TaskList extends Component{
    render(){
        return(
            <View style = {styles.container}>
            <ImageBackground source ={today_Image} style={styles.background}>

            </ImageBackground>
            <View style={styles.container}>
             <Text>Lista de Tarefas</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
       flex: 3
    },
    taskList:{
      flex: 7
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }

})