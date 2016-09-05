import { Text, View, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import React, { Component } from 'react';

import { ListItem, Subheader } from '../react-native-material-ui/src';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <Subheader text="One line" />
                    <ListItem
                        divider
                        centerElement="Center element as a text"
                        onPress={() => {}}
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                        onPress={() => {}}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                        }}
                        onPress={() => {}}
                    />
                    <ListItem
                        divider
                        dense
                        centerElement="Center element as a text (dense)"
                    />
                    <ListItem
                        divider
                        centerElement="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />


                    <Subheader text="Two lines" />
                    <ListItem
                        divider
                        dense
                        centerElement={{
                            primaryText: 'Center element as an object (dense)',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                    />
                    <ListItem
                        divider
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Center element as an object',
                            secondaryText: 'Subtext',
                        }}
                    />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={{
                            primaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                            secondaryText: 'Pellentesque commodo ultrices diam. Praesent in ipsum',
                        }}
                        rightElement="info"
                        onLeftElementPress={() =>
                            ToastAndroid.show('Left element pressed', ToastAndroid.SHORT)
                        }
                        onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
                        onRightElementPress={() =>
                            ToastAndroid.show('Right element pressed', ToastAndroid.SHORT)
                        }
                    />
                    <Subheader text="Three lines" />
                    <Subheader text="Dynamic" />
                    <ListItem
                        divider
                        leftElement="person"
                        numberOfLines="dynamic"
                        centerElement={{
                            primaryText: 'With dynamic second line',
                            secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing lit',
                        }}
                        onPress={() => {}}
                    />
                    <Subheader text="Custom" />
                    <ListItem
                        divider
                        leftElement="person"
                        centerElement={<Text>Custom center element</Text>}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default List;