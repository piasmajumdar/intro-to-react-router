import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    // console.log(post);

    const {id, title, body} = post;

    return (
        <div>
            <h2>Post Details: Post No. {id}</h2>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;