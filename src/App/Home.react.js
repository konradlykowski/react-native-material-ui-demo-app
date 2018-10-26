import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Animated, Easing, Platform, ScrollView} from 'react-native';

import Container from '../Container';
// components
import {Avatar, BottomNavigation, Icon, ListItem, Toolbar,} from '../react-native-material-ui/src';
import ProfileScreen from "../ProfileView";
import * as WholeData from "../Entities/Profiles"

import ActionButton from "../react-native-material-ui/src/ActionButton/ActionButton.react";
import {purple500} from "../react-native-material-ui/src/styles/colors";
import UnderlineTabBarExample from "../TabViewExample";
import ChatView from "../Chat"

const UP = 1;
const DOWN = -1;

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.offset = 0;
        this.scrollDirection = 0;

        this.state = {
            selected: [],
            searchText: '',
            active: 'people',
            moveAnimated: new Animated.Value(0),
        };
    }

    onAvatarPressed = (value) => {
        const {selected} = this.state;

        const index = selected.indexOf(value);

        if (index >= 0) {
            // remove item
            selected.splice(index, 1);
        } else {
            // add item
            selected.push(value);
        }

        this.setState({selected});
    }
    onScroll = (ev) => {
        const currentOffset = ev.nativeEvent.contentOffset.y;

        const sub = this.offset - currentOffset;

        // don't care about very small moves
        if (sub > -2 && sub < 2) {
            return;
        }

        this.offset = ev.nativeEvent.contentOffset.y;

        const currentDirection = sub > 0 ? UP : DOWN;

        if (this.scrollDirection !== currentDirection) {
            this.scrollDirection = currentDirection;


        }
    }
    show = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 0,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    hide = () => {
        Animated.timing(this.state.moveAnimated, {
            toValue: 56, // because the bottom navigation bar has height set to 56
            duration: 195,
            easing: Easing.bezier(0.4, 0.0, 0.6, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    renderToolbar = () => {
        if (this.state.selected.length > 0) {
            return (
                <Toolbar
                    key="toolbar"
                    leftElement="clear"
                    onLeftElementPress={() => this.setState({selected: []})}
                    centerElement={this.state.selected.length.toString()}
                    rightElement={['delete']}
                    style={{
                        container: {backgroundColor: 'red'},
                        titleText: {color: 'red'},
                        leftElement: {color: 'red'},
                        rightElement: {color: 'red'},
                    }}
                />
            );
        }
        return (
            <Toolbar
                key="toolbar"
                leftElement=""
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement="Hello, Super Mama!"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Talk to Super Mama...',
                    onChangeText: value => this.setState({searchText: value}),
                    onSearchClosed: () => this.setState({searchText: ''}),
                }}
            />
        );
    }

    renderAllTheMamas = () => {
        /*
        BUG: first Item is covered up by the topnavigator thingy
        */
        var hugeList = []
        for (var i = 0; i < Object.keys(WholeData).length-1; i++) {
            hugeList.push(this.renderItem(WholeData[i], 'actionButton'))
        }

        return (
            <ScrollView
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="interactive"
                onScroll={this.onScroll}
            >
                {hugeList}
            </ScrollView>
        )
    }

    renderTopNavigation = () => {
        return <BottomNavigation
            active={this.state.active}
            hidden={this.state.bottomHidden}
            style={{container: {position: 'absolute', top: 0, left: 0, right: 0}}}
        >
            <BottomNavigation.Action
                key="myProfile"
                icon={<Icon name="person"/>}
                label="MY PROFILE"
                onPress={() => this.setState({active: 'myProfile'})}
            />
            <BottomNavigation.Action
                key="people"
                icon="people"
                label="HEY, MAMA!"
                onPress={() => this.setState({active: 'people'})}
            />
            <BottomNavigation.Action
                key="bookmark-border"
                icon="bookmark-border"
                label="TIMELINE"
                onPress={() => this.setState({active: 'bookmark-border'})}
            />
        </BottomNavigation>;
    }

    renderItem = (props, route) => {
        const searchText = this.state.searchText.toLowerCase();

        if (searchText.length > 0 && props.name.toLowerCase().indexOf(searchText) < 0) {
            return null;
        }

        return (
            <ListItem
                divider
                leftElement={<Avatar text={props.name[0]}/>}
                onLeftElementPress={() => this.onAvatarPressed(props.name)}
                centerElement={props.name}
                onPress={() => this.props.navigation.navigate(route)}
            />

        );
    }


    render() {
        if (this.state.active === 'people') {
            return (
                <Container>
                    {/*<ChatView/>*/}
                    {this.renderTopNavigation()}
                    {this.renderAllTheMamas()}
                </Container>
            )
        }
        if (this.state.active === 'bookmark-border') {
            return (
                <Container>
                    {this.renderTopNavigation()}
                    <UnderlineTabBarExample/>
                </Container>
            )
        }
        else
            return (
                <Container>
                    {this.renderToolbar()}
                    <ProfileScreen/>
                    {this.renderTopNavigation()}
                </Container>
            );
    }
}

Home.propTypes = propTypes;

export default Home;
