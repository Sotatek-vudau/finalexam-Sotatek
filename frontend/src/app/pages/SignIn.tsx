import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/axios";
import { DataContext } from "../../App";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassWord] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setDataUser } = useContext<any>(DataContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await axiosInstance.post("auth/signin", {
      email: email,
      password: password,
    })
      .then((res) => {
        toast.success('Sign successfully');
        const { data } = res.data;
        setDataUser(data);
        localStorage.setItem("accessToken", data.accessToken);
        const dataStr = JSON.stringify(data);
        localStorage.setItem("User", dataStr);
        navigate("/");
      })
      .catch((err) => {
        toast.success(`loi ${JSON.stringify(err)}`);
        throw new Error("loi" + JSON.stringify(err));
      })
      .finally(() => {
        setIsLoading(false)
      }
      )
  }
  return (
    <div className="w-full h-[100vh] bg-background bg-no-repeat bg-center bg-cover fixed py-auto">
      <div className="bg-[#FFFF] w-[35%] px-[50px] py-[50px] rounded-2xl flex flex-col content-center items-start ml-[50%]  mt-[7%]">
        <p className="text-[40px] font-semibold leading-10 mb-[7px]">Sign In</p>
        <p className="text-[14px] leading-5">Don'n have an account?<Link to="/signup" className="text-[14px] text-[#5487F5] ml-[6px]">Sign up</Link></p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-[100%] items-start mt-[20px]">
            <label htmlFor="email" className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Email Address</label>
            <input
              className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[100%] items-start mt-[25px]">
            <label htmlFor="password" className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Password</label>
            <div className="w-[100%] relative">
              <input
                type={hidePassword ? "text" : "password"}
                className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password &&
                <i
                  className={`fa-regular ${hidePassword ? "fa-eye-slash" : "fa-eye"} absolute top-[23px] right-[23px] cursor-pointer`}
                  onClick={() => setHidePassWord(!hidePassword)}
                />
              }
            </div>
          </div>
          <button className="w-[100%] h-[55px] rounded-[10px] bg-[#C18FF5] text-[#fff] text-[14px] font-bold mt-[25px]" disabled={!email && !password}>{isLoading ? <Loading /> : "Sign In"}</button>
        </form>
        <Link to='/forgotPassword' className="text-[14px] leading-6 mt-[20px] text-[#5487F5]">Forgot your password? </Link>
      </div>
    </div>
  )
}

export default SignIn;