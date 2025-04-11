import React from 'react';
import { Link } from 'react-router-dom';

const PlantsCart = ({plant}) => {
    const {image,price,name,_id} = plant || []
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
   <Link>   <button className="btn btn-primary">Shop Now</button></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default PlantsCart;