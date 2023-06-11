import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const {data: users =[] , refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    console.log(users);
    return (
        <div>
            this is users page
        </div>
    );
};

export default ManageUsers;