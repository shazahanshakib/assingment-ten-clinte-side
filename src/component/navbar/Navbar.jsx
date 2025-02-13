import { useContext } from "react";
import { FaPlane } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);
  // console.log(user?.photoURL);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allvisa">All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/addvisa">Add Visa</NavLink>
      </li>
      <li>
        <a>My Added Visa</a>
      </li>
      <li>
        <NavLink to="/myvisaapp">My Visa Application</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("perfectly sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-[#034833] p-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center px-16  gap-3 bg-white text-black py-4">
            <div className="text-6xl text-amber-600">
              <FaPlane />
            </div>
            <h1 className="text-6xl font-bold">VISAGO</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px]">{links}</ul>
        </div>

        <div className="navbar-end">
          {user?(
              <div className="flex items-center gap-3 ">
              <span className="max-sm:hidden">{user.displayName}</span>
              <Link to="/myprofile" className="text-xl">
                <img className="w-[20px] rounded-lg" src={user.photoURL}></img>
              </Link>

              <a onClick={handleSignOut} className="btn">
                Log out
              </a>
            </div>
          ):(
               <div className="pr-8 ">
               <NavLink
                 to="/singin"
                 className="btn bg-[#83cd20] text-black text-xl"
               >
                 Sing In
               </NavLink>
             </div>
            
          )}
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{/* <div className=" pr-8 ">
<NavLink
  to="/createuser"
  className="btn bg-[#83cd20] text-black text-xl"
>
  Sing up
</NavLink>
</div> */}