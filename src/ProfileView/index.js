import React from 'react'

import contactData from '../Entities/Profile.json'

import Profile from './Profile'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
    header: null,
})

ProfileScreen.propTypes = {
}

export default ProfileScreen