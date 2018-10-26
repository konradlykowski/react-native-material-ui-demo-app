import React from 'react'

import contactData from '../Entities/Profiles.json'

import Profile from '../OtherMomView/ProfileView'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
    header: null,
})

ProfileScreen.propTypes = {
}

export default ProfileScreen