/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Timeline from 'react-native-timeline-listview';

export default class EventTimeLine extends Component {
    constructor() {
        super();
        this.onEventPress = this.onEventPress.bind(this);
        this.renderSelected = this.renderSelected.bind(this);

        this.data = [
            {
                id: 0,
                time: '09:00',
                title: 'Archery Training',
                description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. \n\nSara will join!',
                lineColor: '#009688',
                icon: require('../Icons/1.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
            },
            {
                id: 1,
                time: '10:45',
                title: 'Play Badminton',
                description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
                icon: require('../Icons/2.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
            },
            {
                id: 2,
                time: '12:00',
                title: 'Lunch',
                description: '\nMonika will join!',
                icon: require('../Icons/3.png'),
            },
            {
                id: 3,
                time: '14:00',
                title: 'Watch Soccer',
                description: 'Team sport played between two teams of eleven players with a spherical ball. ',
                lineColor: '#009688',
                icon: require('../Icons/4.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
            },
            {
                id: 4,
                time: '16:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../Icons/5.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            }
            ,
            {
                id: 5,
                time: '17:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../Icons/5.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            }
            ,
            {
                id: 6,
                time: '18:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../Icons/5.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            }
            ,
            {
                id: 6,
                time: '19:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../Icons/5.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            }
            ,
            {
                id: 7,
                time: '22:30',
                title: 'Go to Fitness center',
                description: 'Look out for the Best Gym & Fitness Centers around me :)',
                icon: require('../Icons/5.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
            }
        ];
        this.state = { selected: null };
    }

    onEventPress(data) {
        this.data[data['id']].description = this.data[data['id']].description + '\n\n' + 'Agatha will join!';
        this.data[data['id']].icon = require('../Icons/10.jpeg');
        this.setState({ selected: data });
    }

    renderSelected() {
        if (this.state.selected) {
            return <Text>Selected
                event: {this.state.selected.title} at {this.state.selected.time}</Text>;
        }
    }

    render() {
        return (

            <View style={styles.container}>

                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={20}
                    circleColor='rgba(0,0,0,0)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{
                        minWidth: 52,
                        marginTop: -5
                    }}
                    timeStyle={{
                        textAlign: 'center',
                        backgroundColor: '#9c27b0',
                        color: 'white',
                        padding: 5,
                        borderRadius: 13
                    }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                    innerCircle={'icon'}
                    onEventPress={this.onEventPress}
                    separator={false}
                    detailContainerStyle={{
                        marginBottom: 20,
                        paddingLeft: 5,
                        paddingRight: 5,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                    columnFormat='two-column'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 65,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: -60,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
});
