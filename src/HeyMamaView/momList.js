import React from 'react'
import {Avatar, ListItem} from "../react-native-material-ui/src";
import {ListView, ScrollView} from "react-native";

class WholeList extends React.Component{
    state = {
        about: this.props.about,
        tags: this.props.tags,
        telDS: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        }).cloneWithRows(this.props.tels),
        emailDS: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        }).cloneWithRows(this.props.emails),
    }

    renderItem = (title, route) => {
        const searchText = this.state.searchText.toLowerCase();

        if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
            return null;
        }

        return (
            <ListItem
                divider
                leftElement={<Avatar text={title[0]}/>}
                onLeftElementPress={() => this.onAvatarPressed(title)}
                centerElement={title}
                onPress={() => this.props.navigation.navigate(route)}
            />

        );
    }


    MamaList = () => {
        return <ScrollView
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="interactive"
            onScroll={this.onScroll}
        >
            {this.renderItem('Mom2', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
            {this.renderItem('Mom1', 'actionButton')}
        </ScrollView>;
    }

    render(){
        {this.MamaList}
    }
}

export default WholeList