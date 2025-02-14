import { useLoaderData } from "react-router-dom";
import bgImage from "../../../public/slide2.jpg";
import SingleVisa from "../singlevisa/SingleVisa";
// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";

const AllVisa = () => {

    const allVisaItem= useLoaderData();

  return (
    <div
      className="relative h-auto bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#0c4a38] opacity-90"></div>
      <div className="relative flex items-center justify-center flex-col my-10">
        <h3 className="text-center mb-8 w-[300px] text-[20px] font-bold border-2 py-2">
          Service we provide
        </h3>
        <h1 className="text-center text-6xl font-bold">
          Outstanding Immigration <br /> Visa Service
        </h1>
      </div>

      <div className="grid gap-4 my-10 mx-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-4 lg:mx-5 xl:mx-20">
        {
            allVisaItem?.map(visas=> <SingleVisa key={visas?._id} visas={visas}></SingleVisa>)
        }
      </div>
    </div>
  );
};

export default AllVisa;
