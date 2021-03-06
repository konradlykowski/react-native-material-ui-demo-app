import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements';
import {
    Image,
    ImageBackground,
    Linking,
    ListView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

import mainColor from './constants';

import Email from './Email';
import Separator from './Separator';
import Tel from './Tel';
import ChatView from '../Chat';
import { Avatar, ListItem, Toolbar } from '../react-native-material-ui/src';

const about_styles = StyleSheet.create({
    titleText: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
    },
});


const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerContainer: {},
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: mainColor,
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },
});

class Contact extends Component {
    static propTypes = {
        emails: PropTypes.arrayOf(
            PropTypes.shape({
                email: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
        tels: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        ),
        navigation: PropTypes.shape({
            goBack: PropTypes.func.isRequired,
        }).isRequired
    };

    state = {
        about: this.props.about,
        tags: this.props.tags,
        telDS: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        }).cloneWithRows(this.props.tels),
        emailDS: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        }).cloneWithRows(this.props.emails),
    };


    onPressPlace = () => {
        alert(this.state.tags.forEach(() => console.log('place')));
        console.log('place');
    };

    onPressTel = number => {
        Linking.openURL(`tel://${number}`)
            .catch(err => console.log('Error:', err));
    };

    onPressSms = () => {
        this.props.navigation.navigate("chatView");
    };

    onPressEmail = email => {
        Linking.openURL(`mailto://${email}?subject=subject&body=body`)
            .catch(err =>
                console.log('Error:', err)
            );
    };

    renderHeader = () => {
        const {
            avatar,
            avatarBackground,
            name,
            address: { city, country },
        } = this.props;

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={10}
                    source={{
                        uri: avatarBackground,
                    }}
                >
                    <View style={styles.headerColumn}>
                        <Image
                            style={styles.userImage}
                            source={{
                                uri: avatar,
                            }}
                        />
                        <Text style={styles.userNameText}>{name}</Text>
                        <View style={styles.userAddressRow}>
                            <View>
                                <Icon
                                    name="place"
                                    underlayColor="transparent"
                                    iconStyle={styles.placeIcon}
                                    onPress={this.onPressPlace}
                                />
                            </View>
                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                    {city}, {country}
                                </Text>
                            </View>

                        </View>

                        {this.renderTags()}
                    </View>
                </ImageBackground>
            </View>
        );
    };


    renderTel = () => (
        <ListView
            contentContainerStyle={styles.telContainer}
            dataSource={this.state.telDS}
            renderRow={({ id, name, number }, _, k) => {
                return (
                    <Tel
                        key={`tel-${id}`}
                        index={k}
                        name={name}
                        number={number}
                        onPressSms={this.onPressSms}
                        onPressTel={this.onPressTel}
                    />
                );
            }}
        />
    );

    renderEmail = () => (
        <ListView
            contentContainerStyle={styles.emailContainer}
            dataSource={this.state.emailDS}
            renderRow={({ email, id, name }, _, k) => {
                return (
                    <Email
                        key={`email-${id}`}
                        index={k}
                        name={name}
                        email={email}
                        onPressEmail={this.onPressEmail}
                    />
                );
            }}
        />
    );

    renderTags = () => (
        <View style={{
            flex: 1,
            flexDirection: 'row'
        }}>

            {this.state.tags.map((key) => {
                return (
                    <Image
                        key={key.id}
                        style={{
                            width: 50,
                            height: 50
                        }}
                        source={{ uri: key.icon }}
                    />
                );
            })}

        </View>
    );

    onAvatarPressed = (value) => {
        const { selected } = this.state;

        const index = selected.indexOf(value);

        if (index >= 0) {
            // remove item
            selected.splice(index, 1);
        } else {
            // add item
            selected.push(value);
        }

        this.setState({ selected });
    };

    renderItem = (title, route) => {


        return (
            <ListItem
                divider
                leftElement={<Avatar text={title[0]}/>}
                onLeftElementPress={() => this.onAvatarPressed(title)}
                centerElement={title}
                onPress={() => alert("CZesc")}
            />

        );
    };

    render() {
        return (

            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Card containerStyle={styles.cardContainer}>
                        {this.renderHeader()}
                        <Text style={about_styles.titleText}>{this.state.about}</Text>
                        {this.renderTel()}
                        {Separator()}
                        {this.renderEmail()}
                    </Card>
                </View>
            </ScrollView>

        );
    }
}

Contact.propTypes = propTypes;

export default Contact;

