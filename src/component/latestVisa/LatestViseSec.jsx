import { useEffect, useState } from "react";
import bgImage from "../../../public/slide2.jpg";
import SingleVisa from "../singlevisa/SingleVisa";
import { Link } from "react-router-dom";

const LatestViseSec = () => {
  const [visases, setVisas] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/latestvisa")
      .then((res) => res.json())
      .then((Data) => {
        // console.log(Data)
        setVisas(Data);
      });
  }, []);
  console.log(visases);
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
        <h1 className="text-center text-6xl font-bold">Latest Visa Section</h1>
      </div>

      <div className="grid grid-cols-3 gap-7 my-10 mx-40">
        {visases?.map((visas) => (
          <SingleVisa key={visas?._id} visas={visas}></SingleVisa>
        ))}
      </div>

      <div className="relative mb-3">
        <Link to="/allvisa" className="btn bg-[#83cd20] text-black text-[18px] py-6 px-10">See All Visas</Link>
      </div>
    </div>
  );
};

export default LatestViseSec;
