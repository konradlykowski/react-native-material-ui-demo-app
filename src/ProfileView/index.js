import React from 'react'

import contactData from '../Entities/Profile.json'

import Profile from './Profile'
import PropTypes from "prop-types";

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
    header: null,
})

ProfileScreen.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
}

export default ProfileScreen
