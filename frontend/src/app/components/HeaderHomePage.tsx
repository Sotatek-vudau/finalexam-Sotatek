import { useState } from "react";
import CreatePost from "./CreatePost";
import ModalCustom from "./modal/Modal";
import { Avatar, Select } from "antd";

const HeaderHomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full mx-auto flex flex-col px-[25px] py-[25px] rounded-[20px] bg-[#FFFF] mt-[32px]" >
      <div className=" flex flex-row items-center justify-between pb-[24px] border-b-[1px] border-b-solid border-b-[#F1F1F1] relative">
        <Avatar src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" size={44} />
        {/* <input 
          className="w-full py-[11px] pl-[16px] pr-[40px] rounded-[30px] outline-none bg-[#F5F5F5] ml-[10px]" 
          placeholder="Share something" 
          onClick={() => setOpenModal(!openModal)}
        /> */}
        <p className="bg-[#F5F5F5] w-full rounded-[30px] px-0 ml-[10px]">
          <Select
            size='large'
            className='w-full ml-[5px] text-left rounded-[30px] hover:outline-none'
            placeholder='Share something ...'
            onChange={(value) => console.log(value)}
            bordered={false}
            showArrow={false}
            notFoundContent={null}
            onClick={() => setOpenModal(!openModal)}
          />
        </p>
        <i className="fa-regular fa-face-smile absolute right-[15px] w-[20px] h-[20px] text-[#C8C8C8] hover:text-black cursor-pointer"></i>
      </div>
      <div className="flex flex-row items-center pt-[25px] text-[#29282B]">
        <div className="flex flex-row items-center mr-[25px]">
          <i className="fa-regular fa-image text-[#439DF0]"></i>
          <p className="ml-[8px] text-[14px] font-medium">Image</p>
        </div>
        <div className="flex flex-row items-center mr-[25px]">
          <i className="fa-solid fa-video text-[#F4AF6F]"></i>
          <p className="ml-[8px] text-[14px] font-medium">Video</p>
        </div>
        <div className="flex flex-row items-center mr-[25px]">
          <i className="fa-regular fa-paperclip text-[#42B599]"></i>
          <p className="ml-[8px] text-[14px] font-medium">Attachment</p>
        </div>
        <div className="flex flex-row items-center ">
          <i className="fa-solid fa-hashtag text-[#E3707F]"></i>
          <p className="ml-[8px] text-[14px] font-medium">Hashtag</p>
        </div>
      </div>
      <ModalCustom title="Create Post" open={openModal} setOpen={setOpenModal}>
        <CreatePost />
      </ModalCustom>
    </div>
  );
}

export default HeaderHomePage;