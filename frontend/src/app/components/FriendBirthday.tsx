import { Avatar } from "antd";
import cake from "../../assets/img/cake.png";

function FriendBirthday() {
  return (
    <div className="w-[276px] flex flex-col p-[24px] bg-[#FFFF] rounded-[20px] mt-[32px]">
      <div className="flex flex-row justify-center items-center pb-[18px] border-b-[1px] border-b-solid border-b-[#F1F1F1]">
        <img src={cake} className="w-[24px] h-[24px]"/>
        <p className="text-[14px] font-semibold pl-[7px] ">
          FRIEND Birthday
        </p>
      </div>
      <div className="mt-[18px]">
        <div className="flex flex-col mb-[24px]">
          <div className="flex flex-row items-center">
            <Avatar src="https://img2.thuthuatphanmem.vn/uploads/2018/12/08/hinh-anh-nobita-hai-huoc_105846767.jpg" size={50}/>
            <p className="text-[14px] font-semibold mb-[6px] ml-[9px]">Nobi Nobita</p>
          </div>
        </div>
        <div className="flex flex-col mb-[24px]">
          <div className="flex flex-row items-center">
            <Avatar src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/hinh-anh-xuka-de-thuong-nhat.jpg?fit=780%2C439&ssl=1" size={50}/>
            <p className="text-[14px] font-semibold mb-[6px] ml-[9px]">Shizuka</p>
          </div>
        </div>
        <a className="text-[#8954C2] text-[14px] font-semibold cursor-pointer ">View All</a>
      </div>
    </div>
  );
}

export default FriendBirthday;