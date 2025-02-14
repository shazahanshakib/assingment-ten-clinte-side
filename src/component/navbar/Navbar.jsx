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
        <NavLink to="/myaddedvisa">My Added Visa</NavLink>
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
    <div className="flex items-center justify-between bg-[#034833] p-0">


      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
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
            {links}
          </ul>
        </div>
        {/* <div className="flex items-center justify-center px-16  gap-3 bg-white text-black py-4">
            <div className="text-6xl text-amber-600">
              <FaPlane />
            </div>
            <h1 className="text-6xl font-bold">VISAGO</h1>
          </div> */}
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center pr-5 gap-3 sm:bg-white text-black py-4 sm:px-16">
          <div className="text-4xl sm:text-5xl text-amber-600">
            <FaPlane />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">VISAGO</h1>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{links}</ul>
        </div>
      </div>

      <div className=" hidden px-4 lg:block">
        {user ? (
          <div className="flex items-center gap-3 mr-5">
            <Link to="/myprofile" className="text-xl">
              <img className="w-[20px] h-[20px] rounded-lg" src={user.photoURL}></img>
            </Link>

            <button onClick={handleSignOut} className="btn hidden">
              Log out
            </button>
          </div>
        ) : (
          <div className="pr-8">
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
  );
};

export default Navbar;

{
  /* <div className=" pr-8 ">
<NavLink
  to="/createuser"
  className="btn bg-[#83cd20] text-black text-xl"
>
  Sing up
</NavLink>
</div> */
}
