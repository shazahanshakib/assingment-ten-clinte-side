
import Swal from "sweetalert2";



const SingleMyVisa = ({myvisas, myVisa, setMyVisa}) => {

    const {fName, lName, email, fee, selectedDate, countryImage, countryName, Validity,  processingTime, appMethod, visaType, _id}=myvisas;



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
            fetch(`http://localhost:5000/visaapply/${id}`, {
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
        <h3>Applicant Name: {fName} {lName}</h3>
        <h3>Applicant Email: {email}</h3>

        <div className="grid grid-cols-2">
          <h3>Fee: {fee}</h3>
          <h3>Validity: {Validity}</h3>
        </div>
        <h3>Visa type: {visaType}</h3>
        <h3>Application Method: {appMethod}</h3>
        <h3>Processing Time: {processingTime}</h3>
        <h3>Applied Date: {selectedDate}</h3>
      </div>

      <div className="flex items-center justify-center">
        <button onClick={() => handleDelet(_id)} className="btn">Cancel</button>
      </div>
    </div>
    );
};

export default SingleMyVisa;