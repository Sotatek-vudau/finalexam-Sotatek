import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../App';
import logoSotatek from "../../assets/img/logo-sotatek.png"
function NavBar() {
  const [showOption, setShowOption] = useState<boolean>(false);
  const {dataUser} = useContext<any>(DataContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem("User");
    navigate('/signin');
  }

  return (
    <nav className="w-[1349px] mx-auto px-[120px] py-[20px] flex flex-row bg-white ">
      <div className="flex flex-row basis-4/12 justify-start">
        <img src={logoSotatek} className="w-[100px] h-[40px]" />
        <input type="search" className="ml-[15px] h-[36px] outline-none border-[1px] border-solid border-[#EAEAEA] rounded-[20px] px-[15px] text-[14px] " />
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
      <div className="flex flex-row items-center basis-2/12 justify-start pl-[50px] cursor-pointer relative" onClick={()=>setShowOption(!showOption)}>
        <img src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" className="w-[22px] h-[22px] rounded-full" />
        <p className="ml-[10px]">{dataUser?.username}</p>
        {
          showOption && 
          <div 
            className="absolute w-[170px] flex flex-col top-[40px] text-left bg-white py-[10px] px-[7px] rounded-[5px] "
          >
            <p className="pb-[7px] px-[20px] border-b-[1px] border-b-solid border-b-gray cursor-pointer hover:bg-[#cac8c8]">
              <i className="fa-solid fa-gear mr-[10px]"></i>
              Setting
            </p>
            <p className="pt-[7px] pb-[7px] px-[20px] border-b-[1px] border-b-solid border-b-gray cursor-pointer hover:bg-[#cac8c8]">
              <i className="fa-solid fa-circle-exclamation mr-[10px]" />
              About
            </p>
            <p className="pt-[7px] pb-[7px] px-[20px] cursor-pointer hover:bg-[#cac8c8]" onClick={logout}>
              <i className="fa-solid fa-right-from-bracket mr-[10px]" />
              Logout
            </p>
          </div>
        }
      </div>
      
    </nav>
  );
}

export default NavBar;