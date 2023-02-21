function Post() {
  return (
    <div className="flex flex-col w-[584px] px-[24px] py-[20px] bg-[#FFFF] items-start rounded-[20px] mt-[32px]">
      <div className="flex flex-row relative w-[100%] mb-[20px]">
        <img src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" className="w-[44px] h-[44px] rounded-full mr-[10px]" />
        <div className="flex flex-col items-start">
          <p className="text-[14px] font-semibold leading-5">Doraemon</p>
          <p className="text-[14px] leading-5 text-[#ACACAC]">2 hourse ago</p>
        </div>
        <i className="fa-solid fa-ellipsis absolute right-0 cursor-pointer"></i>
      </div>
      <p className="text-left text-[#29282B] leading-5 mb-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      <div className="mb-[20px]">
        <img src="http://diendantienganh.com/uploads/ha/doraemon/2_Doramemon.jpg" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row  items-center mr-[18px]">
          <i className="fa-solid fa-heart text-[#E3707F] cursor-pointer"></i>
          <p className="ml-[5px]">99</p>
        </div>
        <div className="flex flex-row  items-center">
          <i className="fa-regular fa-comment cursor-pointer"></i>
          <p className="ml-[5px]">99</p>
        </div>
      </div>
    </div>
  );
}

export default Post;