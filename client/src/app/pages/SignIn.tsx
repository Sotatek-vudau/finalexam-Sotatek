import React from "react";
// import imgBg from "../../assets/img/img_bg_login.png";
const SignIn = () => {
  return (
    <div className="w-full min-h-[100vh] bg-background bg-no-repeat bg-center bg-cover">
      <div className="bg-[#FFFF] w-[598px] px-[74px] py-[77px] rounded-2xl flex flex-col content-center items-start absolute top-[20%] left-[50%] shadow-inner shadow-white-gainsboro">
        <p className="text-[40px] font-semibold leading-10 mb-[7px]">Sign In</p>
        <p className="text-[14px] leading-5">Don'n have an account?</p>
        <div className="flex flex-col w-[100%] items-start mt-[20px]">
          <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Email Address</label>
          <input className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]" />
        </div>
        <div className="flex flex-col w-[100%] items-start mt-[25px]">
          <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Password</label>
          <div className="w-[100%] relative">
            <input type="password" className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]" />
            <i className="fa-regular fa-eye absolute top-[23px] right-[23px] cursor-pointer"></i>
          </div>
        </div>
        <button className="w-[100%] h-[55px] rounded-[10px] bg-[#C18FF5] text-[#fff] text-[14px] font-bold mt-[25px]">Sign In</button>
        <p>Forgot your password?</p>
      </div>
    </div>
  )
}

export default SignIn;