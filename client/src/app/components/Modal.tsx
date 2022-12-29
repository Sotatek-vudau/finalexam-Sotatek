
const Modal = () => {
    return(
        <div className=" fixed top-0 h-[100vh] w-[100vw] bg-red-300 bg-opacity-5 flex items-center justify-center">
            <div className="w-[800px] min-h-[500px] bg-white rounded-[20px] border-[1px] border-solid border-black">
                <div className="w-[100%] h-[55px] flex flex-row items-center justify-center relative">
                    <p className="text-[28px] font-bold">Create Port</p>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.bn9VuMAC4zgKppQG9kNzXAHaHa&pid=Api&P=0" 
                        className="w-[20px] h-[20px] absolute top-[10px] right-[20px] cursor-pointer" 
                    />
                </div>
                <div>content</div>
            </div>
        </div>
    );
}

export default Modal;