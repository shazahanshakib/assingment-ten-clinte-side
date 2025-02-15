import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const visaDet = useLoaderData();
  // console.log(visaDet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(selectedDate)

  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    Validity,
    appMethod,
    description,
    age,
  } = visaDet;

  const handleApplyBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fname.value;
    const lName = form.lname.value;
    const email = form.email.value;
    const fee = form.fee.value;

    const newApply= {fName, lName, email, fee, selectedDate, countryName, countryImage, visaType, processingTime, appMethod, Validity}
    // console.log("perfect", fName, lName, email, fee, selectedDate);

    fetch('http://localhost:5000/visaapply',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newApply)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success("Apply successfully!");
    })

    setIsModalOpen(false)
  };
  // ami ki ar parbo

  return (
    <div className=" bg-white text-black shadow-xl p-4 px-60">
      <div className="flex">
        <div>
          <div className="">
            <figure className="">
              <img
                src={countryImage}
                alt="Shoes"
                className="object-cover h-[250px] w-full"
              />
            </figure>
          </div>
          <div>
            <h1 className="text-center my-2 text-xl font-bold py-3 border bg-[#83cd20]">
              {countryName}
            </h1>
          </div>
        </div>

        <div className="text-[16px] px-4 ml-10 w-full">
          <div className="mb-2">
            <h1 className="font-bold text-xl my-2">Visa Description</h1>
            <h3 className="max-w-[600px]">{description}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div>
              <h3>Visa Type: {visaType}</h3>
              <h3 className="my-2">Processing Time: {processingTime}</h3>
              <h3 className="">Application Method: {appMethod}</h3>
            </div>
            <div>
              <h3>Fee: {fee}</h3>
              <h3 className="my-2">Validity: {Validity}</h3>
              <h3>Age_restriction: {age}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-amber-600 text-black text-[18px] font-bold"
        >
          Apply Button
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
          <div className=" p-6 rounded-lg shadow-lg w-[400px] bg-[#83cd20]">
            <div className="">
              <h2 className="text-xl font-bold mb-4">
                Apply for {countryName} Visa
              </h2>
              <p>Are you sure you want to proceed with your application?</p>
            </div>
            <form className="card-body" onSubmit={handleApplyBtn}>
              <div className="card w-full max-w-sm shrink-0 shadow-2xl my-5 text-black">
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      placeholder="first name"
                      className="input input-bordered bg-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      placeholder="last name"
                      className="input input-bordered bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Fee</span>
                  </label>
                  <input
                    type="number"
                    name="fee"
                    placeholder="fee"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>

                <div className="form-control mt-4">
                  <label className="label mr-4">
                    <span className="label-text font-bold">Date of apply</span>
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) =>{
                      const exactDate = date.toISOString().split("T")[0];
                      setSelectedDate(exactDate)
                    }}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Select a date"
                    className="bg-white py-2"
                  ></DatePicker>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mr-2 px-4 py-2 bg-gray-400 text-black font-bold rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 text-black font-bold rounded-md"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
