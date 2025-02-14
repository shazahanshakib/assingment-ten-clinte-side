import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import SingleVisa from "../singlevisa/SingleVisa";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exatItem, setExatItem] = useState();
  // console.log(exatItem);
  const [myVisa, setMyVisa] = useState([]);

  const allVisaItem = useLoaderData();
  const myAdd = true;

  

  useEffect(() => {
    const myAddedVisa = allVisaItem.filter(
      (singlevisa) => singlevisa.userEmail === user.email
    );
    setMyVisa(myAddedVisa); // ✅ Runs only when allVisaItem or user.email changes
  }, [allVisaItem, user.email]);

  const handleUdateSubmitBtn = (e) => {
    e.preventDefault();
    // console.log("perfect", countryName);

    const form = e.target;
    const countryName= form.name.value;
    const countryImage= form.couimage.value;
    const visaType= form.visaType.value;
    // const validPass= form.validpass.value;
    const age= form.age.value;
    const fee= form.fee.value;
    const Validity= form.validity.value;
    const appMethod= form.appmethod.value;
    const processingTime= form.processingTime.value;
    const description= form.description.value;
    // const touristVisa= form.touristvisa.value;

    const newVisa= {countryName, countryImage, visaType, age, fee, description, Validity, appMethod, processingTime,}

    fetch(`http://localhost:5000/allvisa/${exatItem._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data);
        if (Data.modifiedCount > 0) {

          setMyVisa((prevVisas) =>
            prevVisas.map((visa) =>
              visa._id === exatItem._id ? { ...visa, ...newVisa } : visa
            )
          );
          Swal.fire({
            title: "success!",
            text: "Perfectly updated a coffe",
            icon: "success",
            confirmButtonText: "Add",
          });
          
          setIsModalOpen(false); // Close modal after update
        }
      });
  };

  return (
    <div className="h-auto bg-[#08312B] py-10">
      <div className="flex items-center justify-center flex-col ">
        <h3 className="text-center mb-8 w-[300px] text-[20px] font-bold border-2 py-2">
          Service we provide
        </h3>
        <h1 className="text-center text-6xl font-bold">
          My Added Visa on
          <br /> this Platform
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-10 mx-20">
        {myVisa?.map((visas) => (
          <SingleVisa
            key={visas?._id}
            visas={visas}
            myAdd={myAdd}
            myVisa={myVisa}
            setMyVisa={setMyVisa}
            setExatItem={setExatItem}
            setIsModalOpen={setIsModalOpen}
          ></SingleVisa>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
          <div className=" p-6 rounded-lg shadow-lg">
            <div className="hero bg-base-200">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="mt-3">
                  <h1 className="text-3xl font-bold text-center">
                    Update Your Visa Form
                  </h1>
                </div>
                <form className="card-body" onSubmit={handleUdateSubmitBtn}>
                  {/* country image and country name  */}
                  <div className="flex gap-3">
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text">Country Name</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={exatItem.countryName}
                        name="name"
                        placeholder="country name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text">Country Image</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={exatItem.countryImage}
                        name="couimage"
                        placeholder="country image"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  {/* select box and check box  */}
                  <div className="flex items-center justify-between gap-3 my-5">
                    <div className="w-full">
                      <select
                        name="visaType"
                        className="select select-bordered w-full max-w-xs outline-none"
                      >
                        <option disabled>Select Visa item</option>
                        <option value="Tourist Vise">Tourist Visa</option>
                        <option value="student Visa">Student Visa</option>
                        <option value="Official Visa">Official Visa</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-around gap-1 w-full">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Visa App</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox"
                            value="Visa App"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Valid Pass</span>
                          <input
                            type="checkbox"
                            name="validpass"
                            defaultChecked
                            className="checkbox"
                            value="Valid Pass"
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Photo</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox"
                            value="Photo"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* age and fee sec  */}
                  <div className="flex gap-3 items-center justify-between">
                    <div className="form-control w-full">
                      <label className="label mb-2">
                        <span className="label-text">Age</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={exatItem.age}
                        name="age"
                        placeholder="Enter your age"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label mb-2">
                        <span className="label-text">Fee</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={exatItem.fee}
                        name="fee"
                        placeholder="Enter your fee"
                        className="input  w-full outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Validity and Applicatin Method  */}
                  <div className="flex gap-3 items-center justify-between">
                    <div className="form-control w-full">
                      <label className="label mb-2">
                        <span className="label-text">Validity</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={exatItem.Validity}
                        name="validity"
                        placeholder="Enter your age"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label mb-2">
                        <span className="label-text">Application Method</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={exatItem.appMethod}
                        name="appmethod"
                        placeholder="Enter your fee"
                        className="input  w-full outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* processin time  */}

                  <div className="form-control w-full">
                    <label className="label mb-2">
                      <span className="label-text">Processing Time</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={exatItem.processingTime}
                      name="processingTime"
                      placeholder="Enter processing time"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* description  */}
                  <div className="form-control w-full">
                    <label className="label mb-2">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={exatItem.description}
                      placeholder="Description"
                      className="input  w-full outline-none"
                      required
                    />
                  </div>

                  <div className="form-control mt-6 w-full">
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
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisa;
