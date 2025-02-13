import { useLoaderData } from "react-router-dom";
import bgImage from "../../../public/slide1.jpg";
import SingleMyVisa from "../singleMyVisa/SingleMyVisa";
import { useState } from "react";

const MyVisaApp = () => {

  const myVisaApply= useLoaderData();
  const [myVisa, setMyVisa]= useState(myVisaApply)
  // console.log(myVisaApply);
  return (
    <div
      className="relative h-auto bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#0c4a38] opacity-90"></div>
      <div className="relative flex items-center justify-center flex-col my-10">
        <h3 className="text-center mb-8 w-[300px] text-[20px] font-bold border-2 py-2">
          Your Visas
        </h3>
        <h1 className="text-center text-6xl font-bold">
          My Visa Application
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-10 mx-20">
        {myVisa?.map((myvisas) => (
          <SingleMyVisa key={myvisas?._id} myvisas={myvisas} myVisa={myVisa} setMyVisa={setMyVisa}></SingleMyVisa>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApp;
