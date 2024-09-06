import gifImg from "../assets/gifImg.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MockData } from "../data";

function Home() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" w-full bg-black  flex flex-col items-center justify-start py-2">
      <div className=" w-full flex justify-between items-center mt-6">
        <img src={gifImg} className="w-32 h-32" />
        <h4 className=" font-sans text-white text-center text-xl leading-10">
          باورم نیست پدر رفتی و خاموش شدی <br /> ترک ما کردی و با خاک هم آغوش
          شدی
        </h4>
        <img src={gifImg} className="w-32 h-32" />
      </div>

      <div className="w-3/4 mt-10">
        <Slider {...settings}>
          {MockData.images.map((item, index) => {
            return (
              <div key={index} className="bg-[#000]">
                <div className="flex flex-col items-center">
                  <img src={item} className="w-60 h-60 object-contain block" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="w-3/4 mt-10">
        <Slider {...settings}>
          {MockData.videos.map((item, index) => {
            return (
              <div key={index} className="bg-[#000]">
                <div className="flex flex-col items-center">
                  <video controls className=" w-64 h-64 ">
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default Home;
