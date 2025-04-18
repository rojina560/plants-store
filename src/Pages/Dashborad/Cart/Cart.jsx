import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cart] = useCart()
  const totalPrice  = cart.reduce((sum,cart) => sum + cart.Price, 0)
  const fixedTotalPrice = Math.round(totalPrice * 100) / 100 ;
  const handleDelete = (id)=>{
    console.log(id);

  }
    return ( 
        <div className=''>
          <div className='flex justify-center gap-12'>
          <div>
            total{fixedTotalPrice}
          </div>
          <div><h2>Total Plants: {cart.length}</h2>
          </div>
          <button>pay</button>
          </div>
            <div className="overflow-x-auto px-6 ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-[#31572c] h-16  text-white text-xl'>
        <th className=''>
        </th>
        <th>item image</th>
        <th>item name </th>
        <th>price</th>
        <th>action</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      { cart.map((item , index)=><tr key={item._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.Img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{item.commonNameFr}</td>
        <td>{item.Price}</td>
        <th>
          <button className="btn bg-yellow-500 border-none"><FaEdit className='text-xl'></FaEdit></button>
        </th>
        <th>
          <button onClick={()=>handleDelete(item._id)} className="btn bg-red-700 border-none"><FaTrash className='text-xl'></FaTrash></button>
        </th>
      </tr> )}
 
   
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Cart;