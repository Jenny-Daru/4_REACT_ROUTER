import React from 'react';
import { useOutletContext } from 'react-router';

interface IFollowersContext {
    nameOfMyUser: string;
}

export default function Followers() {
    const { nameOfMyUser } = useOutletContext<IFollowersContext>();
    return (
        <h1>
            Here are {nameOfMyUser}의 followers
        </h1>
    );
}

