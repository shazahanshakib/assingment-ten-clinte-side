import { useLoaderData } from "react-router-dom";
import bgImage from "../../../public/slide2.jpg";
import SingleVisa from "../singlevisa/SingleVisa";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";

const AllVisa = () => {
  const allVisa = useLoaderData();

  const [allVisaItem, setAllVisaItem]= useState(allVisa);
  const [filtervisa, setFiltervisa]= useState("");
  // console.log(filtervisa);

  useEffect(()=>{
    fetch(`https://assingment-ten-server-side.vercel.app/allvisa?searchParams=${filtervisa}`)
    .then(res=>res.json())
    .then(Data=>{
      // console.log(Data)
      setAllVisaItem(Data)
    })
  },[filtervisa])

  return (
    <div
      className="relative h-auto bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#0c4a38] opacity-90"></div>

      <div className="relative flex items-center justify-center gap-2">
        <h3 className="text-xl">Filter Based on Visa type</h3>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="m-1 border px-3 py-1 font-bold"
            
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={()=>setFiltervisa("official visa")}>Official Visa</a>
            </li>
            <li>
              <a onClick={()=>setFiltervisa("student visa")}>Student Visa</a>
            </li>
            <li>
              <a onClick={()=>setFiltervisa("tourist visa")}>Tourist Visa</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-col my-10">
        <h3 className="text-center mb-8 w-[300px] text-[20px] font-bold border-2 py-2">
          Service we provide
        </h3>
        <h1 className="text-center text-6xl font-bold">
          Outstanding Immigration <br /> Visa Service
        </h1>
      </div>

      <div className="grid gap-4 my-10 mx-5 md:grid-cols-2 lg:grid-cols-4 sm:mx-4 lg:mx-5 xl:mx-20">
        {allVisaItem?.map((visas) => (
          <SingleVisa key={visas?._id} visas={visas}></SingleVisa>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
