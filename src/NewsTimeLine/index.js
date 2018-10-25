/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class Example extends Component {
    constructor(){
        super()
        this.data = [
            {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. '},
            {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
            {time: '12:00', title: 'Lunch', description: 'Lets eat lunch'},
            {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. '},
            {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'},
            {time: '17:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'},
            {time: '18:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'},
            {time: '19:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'},
            {time: '20:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'},
            {time: '21:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'}
        ]
    }

    render() {
        //'rgb(45,156,219)'
        return (
            <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={1}
                    circleColor='#9c27b0'
                    lineColor='white'
                    timeContainerStyle={{minWidth:52, marginTop: -50}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#9c27b0', color:'white', padding:5, borderRadius:9}}
                    descriptionStyle={{color:'gray'}}
                    options={{
                        style:{paddingTop:5}
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: -40,
        backgroundColor:'white'
    },
    list: {
        flex: 1,
        marginTop:20,
    },
});
