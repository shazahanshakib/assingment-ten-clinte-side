

const AddVisa = () => {

    const handleAddVisa=(e)=>{
        e.preventDefault();
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

        const requiredDocuments = Array.from(
            form.querySelectorAll("input[type=checkbox]:checked")
          ).map((checkbox) => checkbox.value);

        const newVisa= {countryName, countryImage, visaType, age, fee, description, Validity, appMethod, processingTime, requiredDocuments}
        

        console.log(newVisa)

        fetch('http://localhost:5000/allvisa',{
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newVisa)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="mt-3">
            <h1 className="text-3xl font-bold text-center">Add Visa Form</h1>
          </div>
          <form className="card-body" onSubmit={handleAddVisa}>
            {/* country image and country name  */}
            <div className="flex gap-3">
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text">Country Name</span>
                </label>
                <input
                  type="text"
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
                <select name="visaType" className="select select-bordered w-full max-w-xs outline-none">
                  <option disabled >
                    Select Visa item
                  </option>
                  <option value="Tourist Vise">Tourist Visa</option>
                  <option value="student Visa">Student Visa</option>
                  <option value='Official Visa'>Official Visa</option>
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
                      value='Visa App'
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
                      value='Valid Pass'
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
                      value='Photo'
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
                  placeholder="Description"
                  className="input  w-full outline-none"
                  required
                />
              </div>

             

            <div className="form-control mt-6 w-full">
              <button className="btn btn-primary w-full">Add Visa</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVisa;
