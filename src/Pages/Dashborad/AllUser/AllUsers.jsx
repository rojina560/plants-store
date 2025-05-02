import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data:  user = []} = useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/user')
           return res.data
        }
    })
    const handleMakeAdmin = (item) =>{
        console.log('this is item',item);
       axiosSecure.patch(`/user/admin/${item}`)
       .then(res =>{
        if(res.data.modifiedCount > 0 ){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }

       })
    }

    const handleDelete = (item) =>{
       Swal.fire({
             title: "Are you sure?",
             text: "You won't be able to revert this!",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, delete it!"
           }).then((result) => {
             if (result.isConfirmed) {
               axiosSecure.delete(`/user/${item}`)
               .then(res =>{
                 refetch()
                 if(res.data.detetedCount > 0){
                   Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success"
                   });
       
                 }
                 
               })
              
             }
           });
    }

    return<div className=''>
              <div className='flex justify-center gap-12'>
              <div>
                <h2>all users</h2>
              </div>
              <div><h2>Total users: {user.length}</h2>
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
            <th></th>
            <th>name</th>
            <th>email </th>
            <th>role</th>
            <th>action</th>
          
          
            
          </tr>
        </thead>
        <tbody>
          { user.map((item , index)=><tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td></td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                {item.role ==='admin'? 'admin':  <button onClick={()=>handleMakeAdmin(item._id)} className="btn bg-yellow-500 border-none"><FaUsers></FaUsers></button>}
            
            </td>
            <td>
              <button onClick={()=>handleDelete(item._id)} className="btn bg-red-700 border-none"><FaTrash className='text-xl'></FaTrash></button>
            </td>
          </tr> )}
     
       
        </tbody>
       
      </table>
    </div>
            </div>
        
    };
    


export default AllUsers;