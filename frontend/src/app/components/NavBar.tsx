const NavBar = () => {
  return (
    <nav className="w-full px-[120px] py-[20px] flex flex-row bg-white">
      <div className="flex flex-row basis-4/12 justify-start">
        <img src="https://s3-alpha-sig.figma.com/img/9c2c/62d1/9007b24ba774c05c82ad84e5a4dce677?Expires=1673827200&Signature=Rhyhodryg3i0DnGPGt8Jlkcq2cudz2LzAdpOXn~v5FPaCaCIdXKdsxNhJVY5dGR6x5SERxRpb6QBG3LTkNC8cQN~26jAh1FB4ySpEb4NM9R9ev~iooArXi2aqBPrfxaQ9eUm8NjjMbdbpURmSaaMq~q9f1phEZiySj8grjHNUSujloq8y7QeAdgDSjRIxshKDlwDIOT9CqpUogqzUliCtsL1k7L7Oclwj74BGhtX9PaRlT1RfN-uXUP6-fPbJnJCtLasmDbv2N6Duc~WxuWqGGZrgxCdc-FsUyCwiH2NYFOe3gHL63VMGVc~EsjlYTS5rTxbkp2CwrFweUVp7TPSqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="w-[39px] h-[39px]" />
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
      <div className="flex flex-row items-center basis-2/12 justify-end">
        <img src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg" className="w-[22px] h-[22px] rounded-full" />
        <p className="ml-[10px]">Doraemon</p>
      </div>
    </nav>
  );
}

export default NavBar;