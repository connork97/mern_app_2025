import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{ id: 'u1', name: 'Max Schwarz', image: 'https://images.pexels.com/photos/33498261/pexels-photo-33498261.jpeg', places: 3 }];
    return (
        <UsersList items={USERS} />
    );
};

export default Users;