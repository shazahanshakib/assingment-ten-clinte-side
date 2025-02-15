import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleVisa = ({ visas, myAdd, myVisa, setMyVisa, setExatItem, setIsModalOpen }) => {
  // console.log(myAdd)
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    Validity,
    appMethod,
    _id
  } = visas;

  


  const handleDelet = (id) => {
          console.log(id);
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/allvisa/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                    const remaining= myVisa.filter(visa=> visa._id !== id)
                    setMyVisa(remaining)
                  }
                });
            }
          });
        };
  

        const handleUpdate=()=>{
          setExatItem(visas)
          setIsModalOpen(true)
        }
  return (
    <div className="card bg-white text-black shadow-xl p-4">
      <div className="relative ">
        <figure className="">
          <img
            src={countryImage}
            alt="Shoes"
            className="object-cover h-[200px] w-full"
          />
        </figure>
        <div className="border py-4 px-16 absolute top-[95%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#0c4a38] text-white">
          <h2 className="card-title">{countryName}</h2>
        </div>
      </div>

      <div className="card-body mt-5 text-[16px]">
        <h3>Visa Type: {visaType}</h3>
        <h3>Processing Time: {processingTime}</h3>

        <div className="flex justify-between">
          <h3>Fee: {fee}</h3>
          <h3>Validity: {Validity}</h3>
        </div>
        <h3>Application Method: {appMethod}</h3>
      </div>

      <div>
        {myAdd?<div className="flex items-center justify-around">
          <button onClick={()=>handleUpdate()} className="btn bg-[#83CD20]">Update</button>
          <button onClick={() => handleDelet(_id)} className="btn bg-[#83CD20]">Delete</button>
        </div>:<Link to={`/visadetails/${_id}`} className="btn bg-amber-600">
          See Details
        </Link>}
      </div>
    </div>
  );
};

export default SingleVisa;
