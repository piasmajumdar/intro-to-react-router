import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {

    const { id, title } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{border: '1px solid red', borderRadius: '10px', margin:'10px', padding: '10px'}}>
            <h2>Post Id: {id}</h2>
            <h3>Post Title: {title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>

            <button onClick={handleNavigate}>Show Details: {id}</button>
        </div>
    );
};

export default Post;