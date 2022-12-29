import React from "react";

const SignUp = () => {
    return (
        <div className="w-[100vw] min-h-[100vh] bg-[blue]">
            <div className="w-[600px] min-h-[580px] bg-red-400 flex flex-col rounded-[30px] px-[77px] py-[77px] items-start ">
                <p className="text-[40px] font-semibold leading-10 mb-[7px]">Sign Up</p>
                <p className="text-[14px] leading-5">Have an account?</p>
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
                <div className="flex flex-col w-[100%] items-start mt-[25px]">
                    <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Confirm Password</label>
                    <div className="w-[100%] relative">
                        <input type="password" className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]" />
                        <i className="fa-regular fa-eye absolute top-[23px] right-[23px] cursor-pointer"></i>
                    </div>
                </div>
                <div className="flex flex-row mt-[20px]">
                    <input type="checkbox" className="w-[22px] h-[22px] outline-none mr-[15px] " />
                    <p className="text-[14px] font-semibold">I accept the</p>
                </div>
                <button className="w-[100%] h-[55px] rounded-[10px] bg-[#C18FF5] text-[#fff] text-[14px] font-bold mt-[25px]">Create Account</button>
            </div>
        </div>
    )
}

export default SignUp;