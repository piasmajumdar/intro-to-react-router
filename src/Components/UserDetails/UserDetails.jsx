import React from 'react';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;

    const navigate = useNavigate();

    // const params = useParams();
    // console.log(params.userId)

    const {userId} = useParams();
    console.log(userId)

    return (
        <div>
            <h2>User Details is here</h2>

            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;