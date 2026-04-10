import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    // console.log(post);

    const {id, title, body} = post;

    const navigate = useNavigate();

    return (
        <div>
            <h2>Post Details: Post No. {id}</h2>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;