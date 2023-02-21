import { useContext, useState } from "react";
import ModalCustom from "./modal/Modal";
import EditProfile from "./EditProfile";
import { Avatar } from "antd";
import { DataContext } from "../../App";

function InfoUser() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {dataUser} = useContext<any>(DataContext);
  

  return (
    <div className="w-[100%] flex flex-col p-[24px] bg-white rounded-[20px] my-[32px] ">
      <div className="flex flex-row pb-[16px] border-b-[1px] border-b-solid border-b-[#F1F1F1]">
        <Avatar src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" size={44}/>
        <div className="flex flex-col items-start ml-[10px]">
          <p className="text-[14px] font-semibold text-[#29282B]">{dataUser?.username}</p>
          <p className="text-[14px] font-normal text-[#ACACAC]">{dataUser?.location}</p>
        </div>
      </div>
      <div className="flex flex-col py-[18px] border-b-[1px] border-b-solid border-[#F1F1F1]">
        <div className="flex flex-row items-center mb-[8px]">
          <i className="fa-solid fa-heart text-[#F36986] mr-[14px]"></i>
          <p className="text-[16px] font-semibold mr-[4px]">10K</p>
          <p className="text-[12px] font-medium text-[#ACACAC]">Follows</p>
        </div>
        <div className="flex flex-row items-center mb-[12px]">
          <i className="fa-solid fa-eye text-[#F58E54] mr-[14px]"></i>
          <p className="text-[16px] font-semibold mr-[4px]">600</p>
          <p className="text-[12px] font-medium text-[#ACACAC]">Following</p>
        </div>
        <p className="text-[#6F6F6F] text-[12px] text-left">
          {dataUser?.bio}
        </p>
      </div>
      <div className="flex flex-col items-start py-[16px]">
        <p className="text-[14px] font-medium text-[#6F6F6F] mb-[13px]">MY PAGES</p>
        <div className="flex flex-row items-center mb-[13px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-[21px] h-[21px] rounded-full" />
          <p className="text-[12px] leading-5 font-medium ml-[17px]">MinhVu_2409</p>
        </div>
        <div className="flex flex-row items-center mb-[13px]">
          <img src="http://fc06.deviantart.net/fs70/i/2014/004/3/b/skype_icon_by_theholdenb12-d6z39qe.png" className="w-[21px] h-[21px] rounded-full" />
          <p className="text-[12px] leading-5 font-medium ml-[17px]">MinhVu_2409</p>
        </div>
        <button
          className="w-[100%] h-[35px] bg-[#FFFF] rounded-[10px] border-[1px] border-solid border-[#EAEAEA]"
          onClick={() => setOpenModal(!openModal)}
        >
          Edit
        </button>
      </div>
      <ModalCustom title="Edit Profile" open={openModal} setOpen={setOpenModal}>
        <EditProfile />
      </ModalCustom>
    </div>
  );
}

export default InfoUser;