
import { useLoaderData } from 'react-router-dom';
import usePlants from '../../Hooks/usePlants';
import Banner from '../Banner/Banner';
import PlantsCart from '../Plants/PlantsCart';
import { useState } from 'react';

const Home = () => {
    const [plants] = usePlants()
    const {count} = useLoaderData()
    console.log(count);
    const [itemPerPages,setItemPerPages] = useState(3)
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

     }

    return (
        <div>
           <Banner></Banner> 
           <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-4'> 
            {
                plants.map(plant => <PlantsCart key={plant._id} plant={plant}></PlantsCart>)
            }
           </div>
           <div>
          {
            pages.map(page => <button className='btn bg-[#90a955]' key={page}>{page}</button>)
          }
          <select value={itemPerPages} onChange={handleItemPages} id="">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
           </div>
        </div>
    );
};

export default Home;