import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import EventTimeLine from "../EventTimeLine";
import Example from "../NewsTimeLine";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 28,
    },
});

const PageNews = ({label, text = ''}) => (
    <Example/>
);


const PageEvent = () => (
    <EventTimeLine/>
);

const iconsSet = {
    hot: require('../Icons/1.png'),
    trending: require('../Icons/2.png'),
    fresh: require('../Icons/3.png'),
    funny: require('../Icons/4.png'),
    movieAndTv: require('../Icons/1.png'),
    sport: require('../Icons/1.png'),
};

const Tab = ({tab, page, isTabActive, onPressHandler, onTabLayout, styles}) => {
    const {label, icon} = tab;
    const style = {
        marginTop: 15,
        paddingVertical: 10,
    };
    const containerStyle = {
        paddingHorizontal: 100,
        paddingVertical: 5,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor,
        opacity: styles.opacity,
        transform: [{scale: styles.opacity}],
    };
    const textStyle = {
        color: styles.textColor,

    };
    const iconStyle = {
        tintColor: styles.textColor,
        resizeMode: 'contain',
        width: 22,
        height: 22,
        marginLeft: 10,
    };
    return (
        <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
            <Animated.View style={containerStyle}>
                <Animated.Text style={textStyle}>{label}</Animated.Text>
                <Animated.Image style={iconStyle} source={icon}/>
            </Animated.View>
        </TouchableOpacity>
    );
};

export default class UnderlineTabBarExample extends Component {
    _scrollX = new Animated.Value(0);
    // 6 is a quantity of tabs
    interpolators = Array.from({length: 6}, (_, i) => i).map(idx => ({
        scale: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [1, 1.2, 1],
            extrapolate: 'clamp',
        }),
        opacity: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        }),
        textColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['#000', '#fff', '#000'],
        }),
        backgroundColor: this._scrollX.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: ['rgba(110,110,110,0.1)', '#9c27b0', 'rgba(110,110,110,0.1)'],
            extrapolate: 'clamp',
        }),
    }));

    render() {
        return (
            <View style={[styles.container, {paddingTop: 20}]}>
                <ScrollableTabView
                    renderTabBar={() => (
                        <TabBar
                            underlineColor="#FFF"
                            tabBarStyle={{backgroundColor: "#FFF", borderTopColor: '#FFF'}}
                            renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                                <Tab
                                    key={page}
                                    tab={tab}
                                    page={page}
                                    isTabActive={isTabActive}
                                    onPressHandler={onPressHandler}
                                    onTabLayout={onTabLayout}
                                    styles={this.interpolators[page]}
                                />
                            )}
                        />
                    )}
                    onScroll={(x) => this._scrollX.setValue(x)}
                >
                    <PageNews tabLabel={{label: "News/Events"}} label="Page #1 Hot"
                              text="You can pass your own views to TabBar!"/>
                    <PageEvent tabLabel={{label: "BabySitting"}} label="Page #2 Trending"
                               text="Yehoo!!!"/>
                </ScrollableTabView>
            </View>
        );
    }
}
