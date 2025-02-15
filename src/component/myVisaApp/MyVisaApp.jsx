import { useLoaderData } from "react-router-dom";
import bgImage from "../../../public/slide1.jpg";
import SingleMyVisa from "../singleMyVisa/SingleMyVisa";
import { useState } from "react";

const MyVisaApp = () => {
  const myVisaApply = useLoaderData();
  const [myVisa, setMyVisa] = useState(myVisaApply);
  // console.log(myVisaApply);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // console.log(searchQuery);

    fetch(`http://localhost:5000/visaapply?searchParams=${searchQuery}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMyVisa(result)
      });
  };
  return (
    <div
      className="relative h-auto bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#0c4a38] opacity-90"></div>

      <div className=" relative flex items-center justify-center gap-4">
        <h3 className="text-xl font-bold">Search by Country Name</h3>

        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input outline-none bg-white text-black"
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button onClick={handleSearch} className="btn">
            Search
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-col my-10">
        <h3 className="text-center mb-8 w-[200px] md:w-[300px] text-[20px] font-bold border-2 py-2">
          Your Visas
        </h3>
        <h1 className="text-center text-4xl md:text-6xl font-bold">
          My Visa Application
        </h1>
      </div>

      <div className="grid gap-7 my-10 mx-5 md:grid-cols-2 lg:grid-cols-3 sm:mx-4 lg:mx-5 xl:mx-20">
        {myVisa?.map((myvisas) => (
          <SingleMyVisa
            key={myvisas?._id}
            myvisas={myvisas}
            myVisa={myVisa}
            setMyVisa={setMyVisa}
          ></SingleMyVisa>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApp;
