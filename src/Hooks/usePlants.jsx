
import {useQuery} from "@tanstack/react-query"
import useAxiosPublic from './useAxiosPublic';

const usePlants = () => {
   const axiosPublic = useAxiosPublic()
   const {data: plants = []} = useQuery({
    queryKey:['plants'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/plants')
        return res.data
    }
   })
   return[plants]
   
};

export default usePlants;