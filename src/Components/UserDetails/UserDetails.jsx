import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;

    return (
        <div>
            <h2>User Details is here</h2>

            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;