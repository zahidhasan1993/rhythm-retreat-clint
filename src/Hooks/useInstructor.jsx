import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useAuth();
    const axios = useAxiosSecure();

    const {data: instructor,refetch,isLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async () => {
            const res = await axios(`/users/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return {instructor,refetch,isLoading}
}
export default useInstructor;