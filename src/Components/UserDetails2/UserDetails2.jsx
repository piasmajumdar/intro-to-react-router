import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const user = use(userPromise);
    const {name, username} = user;
    // console.log(user);

    return (
        <div>
            <p><small>UserName: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;