import React from 'react';
import { Link } from 'react-router-dom';

const PlantsCart = ({plant}) => {
    const {Img,Price,_id, ["Common name (fr.)"]: commonNameFr} = plant || []
    return (
        <div>
            <div className="card card-compact bg-base-100 max-w-96 mx-auto shadow-xl">
  <figure>
    <img className='w-full h-[370px]'
      src={Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className='flex justify-between items-center'>
   <div className=''>
    <h2 className="card-title">{commonNameFr}</h2>
   
    <h2 className="card-title">$ {Price}</h2>
    </div>
    <div className="card-actions justify-end">
   <Link to={`/plants/${_id}`}><button className="btn bg-[#31572c]">Shop Now</button></Link>
    </div>
   </div>
  </div>
</div>

        </div>
    );
};

export default PlantsCart;