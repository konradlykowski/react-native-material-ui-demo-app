import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import EventTimeLine from "../Listview";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    }
})

const FirstRoute = () => (
    <View style={[styles.container, {backgroundColor: '#ff4081'}]}/>
);
const SecondRoute = () => (
    <EventTimeLine/>
);

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'First'},
            {key: 'second', title: 'Second'},
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({index})}
                initialLayout={{width: Dimensions.get('window').width}}
            />
        );
    }
}
