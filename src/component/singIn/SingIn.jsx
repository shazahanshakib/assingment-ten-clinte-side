import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const SingIn = () => {

    const navigate= useNavigate()

    const {singIn}= useContext(AuthContext)

    const handleSingInUser=(e)=>{
        e.preventDefault();
        const form= e.target;
        // const name= form.name.value;
        const email= form.email.value 
        const password = form.password.value
  
        // console.log( email, password)
        singIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error)
          });
          navigate('/')
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center text-3xl font-bold mt-2">Sing In</h1>
          <form className="card-body" onSubmit={handleSingInUser}>
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
              <button className="btn btn-primary">Log In</button>
            </div>

            <p>
              Create account here{" "}
              <Link to="/createuser" className="link link-hover">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SingIn;