import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {Button, Subheader, Toolbar} from '../react-native-material-ui';
import Container from '../Container';

const styles = StyleSheet.create({
    rowContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 8,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class ProfileView extends Component {
    constructor(props) {
        super(props);
        alert(props);
    }

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Button"
                />
                <Subheader text="Flat buttons"/>
                <View style={styles.rowContainer}>
                    <View style={styles.button}>
                        <Button primary text="Primary"/>
                    </View>
                    <View style={styles.button}>
                        <Button accent text="Accent"/>
                    </View>
                </View>

            </Container>
        );
    }
}


export default ProfileView;
