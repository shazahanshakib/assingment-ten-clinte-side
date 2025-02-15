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
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "bg-[#83cd20] font-bold" : ""
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allvisa"
        className={({ isActive }) =>
          isActive ? "bg-[#83cd20] font-bold" : ""
        }
        >All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/addvisa"
        className={({ isActive }) =>
          isActive ? "bg-[#83cd20] font-bold" : ""
        }
        >Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/myaddedvisa"
        className={({ isActive }) =>
          isActive ? "bg-[#83cd20] font-bold" : ""
        }
        >My Added Visa</NavLink>
      </li>
      <li>
        <NavLink to="/myvisaapp"
        className={({ isActive }) =>
          isActive ? "bg-[#83cd20] font-bold" : ""
        }
        >My Visa Application</NavLink>
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

        <div className="hidden ml-6 lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{links}</ul>
        </div>
      </div>

      <div className=" hidden px-4 lg:block">
        {user ? (
          <div className="relative flex group items-center gap-3 mr-5">
             <img className="w-10 h-10 rounded-full cursor-pointer" src={user?.photoURL} alt="User" />


            <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <p className="text-center font-semibold text-gray-800">{user?.displayName}</p>
              <button onClick={handleSignOut} className="w-full mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                Logout
              </button>
            </div>

            {/* <button onClick={handleSignOut} className="btn hidden">
              Log out
            </button> */}
          </div>
        ) : (
          <div className="pr-8">
            <Link
              to="/singin"
              className="btn bg-[#83cd20] text-black text-xl"
            >
              Sing In
            </Link>
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
