import { MockData } from "../../data";
import img1 from "../../assets/img1.jpg";
function Header() {
  return (
    <div className=" w-full flex justify-between items-center px-12 py-4 bg-[#000000]">
      <div className="rounded-full w-[86px] h-[86px] bg-[#afaaaa] flex justify-center items-center">
        <img src={img1} alt="" className=" rounded-full w-20 h-20" />
      </div>
        <p  className=" text-white font-sans text-3xl">
          خاطرات مرحوم {MockData.name}
        </p>
  
    </div>
  );
}
export default Header;
