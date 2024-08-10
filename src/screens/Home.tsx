import gifImg from "../assets/gifImg.gif";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import BottomMenu from "./BottomMenu";

function SendSms() {
  return (
    <div className="w-full bg-[#000] flex flex-col items-center">
      <div className=" w-full flex justify-between items-center mt-6">
        <img src={gifImg} className="w-32 h-32" />
        <h4 className=" font-sans text-white text-center text-3xl leading-10">
          باورم نیست پدر رفتی و خاموش شدی <br /> ترک ما کردی و با خاک هم آغوش
          شدی
        </h4>
        <img src={gifImg} className="w-32 h-32" />
      </div>
      <img src={img1} className=" w-96 rounded-xl mt-10" />
      <img src={img2} className=" w-64 rounded-xl mt-6" />

      <img src={img3} className=" w-64 rounded-xl mt-6" />
      <img src={img4} className=" w-64 rounded-xl mt-6" />

      <video controls className=" w-80 mt-6 rounded-xl">
        <source src={video2} type="video/mp4" />
      </video>

      <video controls className=" w-80 mt-6 rounded-xl">
        <source src={video1} type="video/mp4" />
      </video>

      <BottomMenu/>

    </div>
  );
}
export default SendSms;
