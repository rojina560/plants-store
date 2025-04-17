
import usePlants from '../../Hooks/usePlants';
import Banner from '../Banner/Banner';
import PlantsCart from '../Plants/PlantsCart';
import { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const[plants] = usePlants()
    
    console.log(plants);
    const axiosPublic  = useAxiosPublic()
    const {data: count = 0 } = useQuery({
      queryKey: ['count'],
      queryFn: async()=> {
        const res  = await axiosPublic.get('/plantsCount')
        return res.data.count
      }
      
    })
    console.log(count);
    const [itemPerPages,setItemPerPages] = useState(5)
    const [currentPage , setCurrentPage] = useState(0)
   const numberOfPages = Math.ceil(count / itemPerPages)
   console.log(numberOfPages);

//    const pages = []
//    for(let i = 0; i < numberOfPages; i ++){
//     pages.push(i)
//    }
     const pages = [...Array(numberOfPages).keys()];
     console.log(pages);
     const handleItemPages = (e)=>{
        const val = parseInt(e.target.value);
        setItemPerPages(val)
        setCurrentPage(0)
     }
     const handlePrevPage = ()=>{ 
      if(currentPage > 0){
        setCurrentPage(currentPage - 1)
      }
     }
     const handleNextPage = () =>{
      if(currentPage < pages.length -1){
        setCurrentPage(currentPage +1)
      }
     }

    return (
        <div>
           <Banner></Banner> 
           <div className='grid md:grid-cols-3 lg:grid-cols-4  gap-4'> 
            {
                plants.map(plant => <PlantsCart key={plant._id} plant={plant}></PlantsCart>)
            }
           </div>
           <p className='text-center my-4'>current page:{currentPage}</p>
           <div className='flex justify-center items-center'>
           
            <button onClick={handlePrevPage}>prev</button>
          {
          pages.map(page => <button className={currentPage === page ? 'btn bg-[#31572c]' : 'btn bg-[#90a955]'} key={page} 
              onClick={()=>setCurrentPage(page)}
            >{page}</button>)
          }
          <button onClick={handleNextPage}>next</button>
          <select value={itemPerPages} onChange={handleItemPages} id="">
            <option value="5">2</option>
            <option value="10">3</option>
            <option value="20">5</option>
           
          </select>
           </div>
        </div>
    );
};

export default Home;