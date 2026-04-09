import { use } from "react";

const User2 = ({usersPromise}) => {

    const users = use(usersPromise);
    console.log('user2 suspense data load', users);

    return (
        <div>
            <h2>This is User Page 2</h2>
        </div>
    );
};

export default User2;