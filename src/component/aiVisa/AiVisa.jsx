import visaImg from "../../../public/visaImg.jpg"

const AiVisa = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={visaImg}
            className="rounded-lg shadow-2xl lg:w-[1000px]"
          />
          <div>
            <h1 className="text-5xl font-bold">Visa Apply in Smothly</h1>
            <p className="py-6">
            Applying for a visa smoothly requires careful planning and attention to detail. Here are some key steps to make the process easier: Check the official embassy or consulate website of the destination country to find the right visa category.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AiVisa;