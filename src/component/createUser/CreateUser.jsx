import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";

const CreateUser = () => {

    const {createUser, updateUserProfile}= useContext(AuthContext);
    // console.log(name);


    const handleCreateUser=(e)=>{
      e.preventDefault();
      const form= e.target;
      const name= form.name.value;
      const email= form.email.value 
      const password = form.password.value
      const imageUrl = form.imageUrl.value

      console.log(name, email, password,imageUrl)

      createUser(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        updateUserProfile({displayName: name, photoURL: imageUrl })
           .then(()=>{
            console.log("perfectly updated")
           })
           .catch((err)=>{
            console.log(err)
           })
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error)
        // ..
      });

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center text-3xl font-bold mt-2">Sing Up</h1>
          <form className="card-body" onSubmit={handleCreateUser}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="ImageUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            
            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary">Create User</button>
            </div>
            <p>
              Log in here{" "}
              <Link to="/singin" className="link link-hover">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
