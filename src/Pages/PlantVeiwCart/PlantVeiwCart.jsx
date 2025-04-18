import { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PlantViewCart = () => {
    const plants = useLoaderData();
    const {Img,Price,Categories,_id, ["Common name (fr.)"]: commonNameFr} = plants || {}
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const handlePlantAddCart = ()=>{
      if(user && user.email){       
        //  send data to the database;
        const plantItem = {
          plantId: _id,
          email: user.email,
          Img,
          commonNameFr,
          Price
        }
        axiosSecure.post('/cart', plantItem)
        .then(res=>{
          console.log(res.data);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "your plant has been added in the cart",
            showConfirmButton: false,
            timer: 1500
          });
        })

      } else{
        Swal.fire({
          title: "you are not logged In",
          text: " please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
          // TODO: send the user to the login page 
          navigate('/login',{state: {from:location}})
          }
        });
      }
      console.log(item,user.email);

    }

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
   <Link><button onClick={handlePlantAddCart
    } className="btn bg-[#31572c]">Add To Cart</button></Link>
    </div>
   </div>
  </div>
</div>

        </div>
    );
};

export default PlantViewCart;
