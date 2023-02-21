import { Avatar } from "antd";
import handshake from "../../assets/img/handshake.png";

function FriendRequets() {
  return (
    <div className="w-[276px] flex flex-col p-[24px] bg-[#FFFF] rounded-[20px] mt-[32px]">
      <div className="flex flex-row justify-center items-center pb-[18px] border-b-[1px] border-b-solid border-b-[#F1F1F1]">
        <img src={handshake} className="w-[24px] h-[24px]"/>
        <p className="text-[14px] font-semibold pl-[7px] ">
          FRIEND REQUETS
        </p>
      </div>
      <div className="mt-[18px]">
        <div className="flex flex-col mb-[24px]">
          <div className="flex flex-row">
            <Avatar src="https://img2.thuthuatphanmem.vn/uploads/2018/12/08/hinh-anh-nobita-hai-huoc_105846767.jpg" size={50}/>
            <div className="ml-[9px]">
              <p className="text-[14px] font-semibold mb-[6px]">Nobi Nobita</p>
              <div className="flex flex-row">
                <i className="fa-sharp fa-solid fa-circle-check text-[#4EDF9A] w-[20px] h-[20px] cursor-pointer"></i>
                <i className="fa-solid fa-circle-xmark text-[#FE6F82] w-[20px] h-[20px] ml-[10px] cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[24px]">
          <div className="flex flex-row">
            <Avatar src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/hinh-anh-xuka-de-thuong-nhat.jpg?fit=780%2C439&ssl=1" size={50}/>
            <div className="ml-[9px]">
              <p className="text-[14px] font-semibold mb-[6px]">Shizuka</p>
              <div className="flex flex-row">
                <i className="fa-sharp fa-solid fa-circle-check text-[#4EDF9A] w-[20px] h-[20px] cursor-pointer"></i>
                <i className="fa-solid fa-circle-xmark text-[#FE6F82] w-[20px] h-[20px] ml-[10px] cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
        <a className="text-[#8954C2] text-[14px] font-semibold cursor-pointer ">View All</a>
      </div>
    </div>
  );
}

export default FriendRequets;