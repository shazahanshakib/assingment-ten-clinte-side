import scanImg from "../../../public/scan.webp"




const ScanVisa = () => {
  return (
    <div className="bg-[#83cd20] text-black">
      <h1 className="text-3xl text-center mb-6 font-bold">
        Explore Our FaceBook and Twitter Page
      </h1>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="grid place-content-center gap-4">
          <img src={scanImg} alt="" />
          <p className="text-center text-xl mb-3">Facebook</p>
        </div>
        <div className="grid place-content-center gap-4">
          <img src={scanImg} alt="" />
          <p className="text-center text-xl">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default ScanVisa;
