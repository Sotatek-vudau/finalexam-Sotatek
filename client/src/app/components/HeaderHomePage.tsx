import ModalCustom from "./modal/Modal";

const HeaderHomePage = () => {
  return (
    <div className="w-[580px] mx-auto flex flex-col px-[25px] py-[25px] rounded-[20px] bg-[#FFFF] mt-[32px]" >
      <div className="flex flex-row items-center pb-[24px] border-b-[1px] border-b-solid border-b-[#F1F1F1] relative">
        <img src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" className="w-[44px] h-[44px] rounded-full mr-[10px]" />
        <input className="w-[100%] h-[44px] py-[11px] pl-[16px] pr-[40px] rounded-[30px] outline-none bg-[#F5F5F5] " placeholder="Share something" />
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
      {/* <ModalCustom /> */}
    </div>
  );
}

export default HeaderHomePage;