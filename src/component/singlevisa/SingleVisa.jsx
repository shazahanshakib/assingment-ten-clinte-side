import { Link } from "react-router-dom";

const SingleVisa = ({ visas }) => {
  // console.log(visas)
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    Validity,
    appMethod,
    _id
  } = visas;

  return (
    <div className="card bg-white text-black shadow-xl p-4">
      <div className="relative ">
        <figure className="">
          <img
            src={countryImage}
            alt="Shoes"
            className="object-cover h-[200px] w-full"
          />
        </figure>
        <div className="border py-4 px-16 absolute top-[95%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#0c4a38] text-white">
          <h2 className="card-title">{countryName}</h2>
        </div>
      </div>

      <div className="card-body mt-5 text-[16px]">
        <h3>Visa Type: {visaType}</h3>
        <h3>Processing Time: {processingTime}</h3>

        <div className="flex justify-between">
          <h3>Fee: {fee}</h3>
          <h3>Validity: {Validity}</h3>
        </div>
        <h3>Application Method: {appMethod}</h3>
      </div>

      <div>
        <Link to={`/visadetails/${_id}`} className="btn bg-amber-600">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default SingleVisa;
