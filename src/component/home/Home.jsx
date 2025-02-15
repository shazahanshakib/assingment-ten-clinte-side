import logoimg1 from "../../../public/slide1.jpg";
import logoimg2 from "../../../public/slide2.jpg";
// import logoimg3 from "../../../public/slide3.jpg"
import logoimg4 from "../../../public/slide4.jpg";
import logoimg5 from "../../../public/slide5.jpg";

const Home = () => {

  
  return (
    <div >
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex items-center"
        >
          <img src={logoimg1} className="object-cover h-[600px] w-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent,black)] opacity-70"></div>
          <div className="absolute flex flex-col justify-center items-center w-full px-4 md:items-start md:mx-14">
            <h1 className="text-4xl font-black text-center sm:text-6xl ">
              We are professional <br /> expert in immigration
            </h1>
            <p className="my-10 text-center">
              We are a well known organigation to travel people in the many
              country. If you want, <br /> you can go anywhere with helping us
            </p>
            <button className="px-10 py-5 bg-[#83cd20]">Read more...</button>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex items-center">
          <img src={logoimg2} className="w-full object-cover h-[600px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent,black)] opacity-70"></div>
          <div className="absolute flex flex-col justify-center items-center w-full px-4 md:items-start md:mx-14">
            <h1 className=" text-4xl font-black text-center sm:text-6xl">
              We are professional <br /> expert in immigration
            </h1>
            <p className="my-10 text-center">
              We are a well known organigation to travel people in the many
              country. If you want, <br /> you can go anywhere with helping us
            </p>
            <button className="px-10 py-5 bg-[#83cd20]">Read more...</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex items-center">
          <img src={logoimg4} className="w-full object-cover h-[600px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent,black)] opacity-70"></div>
          <div className="absolute flex flex-col justify-center items-center w-full px-4 md:items-start md:mx-14">
            <h1 className=" text-4xl font-black text-center sm:text-6xl">
              We are professional <br /> expert in immigration
            </h1>
            <p className="my-10 text-center">
              We are a well known organigation to travel people in the many
              country. If you want, <br /> you can go anywhere with helping us
            </p>
            <button className="px-10 py-5 bg-[#83cd20]">Read more...</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full flex items-center">
          <img src={logoimg5} className="w-full object-cover h-[600px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black,transparent,black)] opacity-70"></div>
          <div className="absolute flex flex-col justify-center items-center w-full px-4 md:items-start md:mx-14">
            <h1 className=" text-4xl font-black text-center sm:text-6xl">
              We are professional <br /> expert in immigration
            </h1>
            <p className="my-10 text-center">
              We are a well known organigation to travel people in the many
              country. If you want, <br /> you can go anywhere with helping us
            </p>
            <button className="px-10 py-5 bg-[#83cd20]">Read more...</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
