import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { PropTypes } from 'prop-types';
import { Toolbar } from '../react-native-material-ui/src';
import Container from '../Container';
import ButtonPage from '../Button';


const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class ChatView extends React.Component {

    constructor(props) {
        super(props);
        this.userId = Math.floor(Math.random() * Math.floor(2));
    }

    state = {
        messages: [],
    };

    async componentWillMount() {
        let response = await fetch(
            'https://ps1.pubnub.com/subscribe/sub-c-3771cd46-d83a-11e8-abf2-1e598b800e69/Channel-u51rglzrq9/0/15205014589958211'
        );
        let responseJson = await response.json();

        this.setState({
            messages: responseJson[0].reverse(),
        });
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
        fetch('https://ps.pndsn.com/publish/pub-c-8d235218-da5d-4f28-a652-4d9e6fa6bb7b/sub-c-3771cd46-d83a-11e8-abf2-1e598b800e69/0/Channel-u51rglzrq9/0?%7B%22text%22%3A%22hey%22%7D?store=0&uuid=Client-tfx3u', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    _id: Date.now(),
                    text: messages[0]['text'],
                    createdAt: new Date(),
                    user: {
                        _id: this.userId,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                }
            ),
        });
    }

    render() {
        return (
            <Container>

                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Agatha Cristie's Profile"
                />
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />

            </Container>
        );
    }
}

ChatView.propTypes = propTypes;

export default ChatView;

