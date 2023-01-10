import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [hidePwd, setHidePwd] = useState(false);
  const [hideConfirmPwd, setHideConfirmPwd] = useState(false);


  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  // useEffect(() => {
  //     setErrMsg('');
  // }, [email, pwd, matchPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(email, pwd);

    // try {
    //     const response = await axios.post(REGISTER_URL,
    //         JSON.stringify({ user, pwd }),
    //         {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true
    //         }
    //     );
    //     // TODO: remove console.logs before deployment
    //     console.log(JSON.stringify(response?.data));
    //     //console.log(JSON.stringify(response))
    //     setSuccess(true);
    //     //clear state and controlled inputs
    //     setUser('');
    //     setPwd('');
    //     setMatchPwd('');
    // } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg('No Server Response');
    //     } else if (err.response?.status === 409) {
    //         setErrMsg('Username Taken');
    //     } else {
    //         setErrMsg('Registration Failed')
    //     }
    //     errRef.current.focus();
    // }
  }

  return (
    <div className="w-full h-[100vh] bg-background bg-no-repeat bg-center bg-cover fixed py-auto ">
      <div className="bg-[#FFFF] w-[35%] px-[50px] py-[50px] rounded-2xl flex flex-col content-center items-start ml-[50%]  mt-[2%]">
        <p className="text-[40px] font-semibold leading-10 mb-[7px]">Sign Up</p>
        <p className="text-[14px] leading-5">Have an account?<Link to="/signin" className="text-[14px] text-[#5487F5] ml-[6px]">Sign in</Link></p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col w-[100%] items-start mt-[20px]">
            <label
              className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
              type="text"
              id="email"
              // ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
              <i className="fa-solid fa-circle-info mr-[10px]"></i>
              Please enter the correct email!!!
            </p>
          </div>
          <div className="flex flex-col w-[100%] items-start mt-[25px]">
            <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">
              Password
            </label>
            <div className="w-[100%] relative">
              <input
                type={hidePwd ? "text" : "password"}
                className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <i
                className={`fa-regular ${hidePwd ? "fa-eye-slash" : "fa-eye"} absolute top-[23px] right-[23px] cursor-pointer`}
                onClick={() => setHidePwd(!hidePwd)}
              />
            </div>
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <i className="fa-solid fa-circle-info mr-[10px]"></i>
              8 to 24 characters.
              Must include uppercase, lowercase letters and a number.
            </p>
          </div>
          <div className="flex flex-col w-[100%] items-start mt-[25px]">
            <label className="text-[14px] font-semibold text-[#4D4D4D] mb-[5px]">Confirm Password</label>
            <div className="w-[100%] relative">
              <input
                type={hideConfirmPwd ? "text" : "password"}
                className="w-[100%] outline-none h-[60px] py-[13px] px-[25px] border-[1px] border-solid border-[#C9C9C9] rounded-[5px]"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <i
                className={`fa-regular ${hideConfirmPwd ? "fa-eye-slash" : "fa-eye"} absolute top-[23px] right-[23px] cursor-pointer`}
                onClick={() => setHideConfirmPwd(!hideConfirmPwd)}
              ></i>
            </div>
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <i className="fa-solid fa-circle-info mr-[10px]"></i>
              Must match the first password input field.
            </p>
          </div>
          <div className="flex flex-row mt-[20px]">
            <input
              type="checkbox"
              className="w-[22px] h-[22px] outline-none mr-[15px] "
            />
            <p className="text-[14px] font-semibold">I accept the</p>
          </div>
          <button className="w-[100%] h-[55px] rounded-[10px] bg-[#C18FF5] text-[#fff] text-[14px] font-bold mt-[25px]">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;