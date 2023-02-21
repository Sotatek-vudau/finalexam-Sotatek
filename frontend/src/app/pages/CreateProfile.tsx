import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../App';
import { axiosInstance } from '../../services/axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
function CreateProfile() {

  const [userName, setUserName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setDataUser } = useContext<any>(DataContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await axiosInstance.put("user/update", {
      "username": userName,
      "bio": bio,
      "location": location
    })
      .then((res) => {
        toast.success("Create user success!!!");
        const { data } = res.data;
        setDataUser(data);
        localStorage.setItem("User", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        toast.success(`Err: ${JSON.stringify(err)}`);
        throw new Error("loi" + JSON.stringify(err));
      })
      .finally(() => {
        setIsLoading(false)
      }
      )
  }

  return (
    <div className="w-full h-[100vh] bg-background bg-no-repeat bg-center bg-cover fixed py-auto ">
      <div className="bg-[#FFFF] w-[35%] px-[50px] py-[50px] rounded-2xl flex flex-col content-center items-start ml-[50%]  mt-[2%]">
        <p className="text-[40px] font-semibold leading-10 mb-[7px]">Create Profile</p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-[100%] items-start mt-[20px]">
            <label
              className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[100%] items-start mt-[25px]">
            <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]" htmlFor="location">
              Location
            </label>
            <div className="w-[100%] relative">
              <input
                type="text"
                className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%] items-start mt-[25px]">
            <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]" htmlFor="bio">
              Bio
            </label>
            <div className="w-[100%] relative">
              <input
                type="text"
                className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
          <button className="w-[100%] h-[55px] rounded-[10px] bg-[#C18FF5] text-[#fff] text-[14px] font-bold mt-[25px]">{isLoading ? <Loading /> : "Create"}</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProfile;