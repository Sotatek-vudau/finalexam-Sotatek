const NavBar = () => {
    return(
        <nav className="w-full px-[120px] py-[20px] flex flex-row bg-white">
            <div className="flex flex-row basis-4/12 justify-start">
                <img src="https://d1myhw8pp24x4f.cloudfront.net/company_logo/1574322171724_b_220.jpg" className="w-[30px] h-[30px]"/>
                <input type="search" className="ml-[15px] h-[36px] outline-none border-[1px] border-solid border-[#EAEAEA] rounded-[20px] px-[15px] text-[14px] "/>
            </div>
            <div className="flex flex-row basis-6/12 justify-between">
                <div className="flex flex-row items-center cursor-pointer">
                    <i className="fa-solid fa-house text-[#8954C2]"></i>
                    <p className="ml-[7px]">Homepage</p>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <i className="fa-regular fa-circle-play text-[#8954C2]"></i>
                    <p className="ml-[7px]">Watch</p>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <i className="fa-sharp fa-solid fa-store text-[#8954C2]"></i>
                    <p className="ml-[7px]">Martketplace</p>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <i className="fa-solid fa-user-group text-[#8954C2]"></i>
                    <p className="ml-[7px]">Groups</p>
                </div>
            </div>
            <div className="flex flex-row items-center basis-2/12 justify-end">
                <img src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" className="w-[22px] h-[22px] rounded-full"/>
                <p className="ml-[10px]">Doraemon</p>
            </div>
        </nav>
    );
}

export default NavBar;