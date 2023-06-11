import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user,loader} = useAuth();
    const axios = useAxiosSecure();

    const {data: admin,isLoading, refetch} = useQuery({
        queryKey: ['admin', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return {admin,refetch,isLoading}
};

export default useAdmin;