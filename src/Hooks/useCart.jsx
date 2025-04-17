
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {data: cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cart')
            return res.data
        }
       
    })
    return [cart]
};

export default useCart;