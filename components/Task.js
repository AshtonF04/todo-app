import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.taskcontainer}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.taskname}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    taskcontainer: {
        /*Visual*/
        backgroundColor: "#fff",
        borderRadius: 12,

        /*Allignment*/
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    taskname: {
        fontSize: 17,
        paddingLeft: 15
    },
    square: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor:"#55BCF6"
    },  
})

export default Task