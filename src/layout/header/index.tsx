import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="container">
      <div>
        <div>
          <Image src={"/logo.svg"} alt={"logo"} width={120} height={120} />{" "}
          <button>Tovarlar katalogi</button>
          <input type="text" placeholder="Tovarlarni izohlash" />
        </div>
        <div>
          <div>
            <FaCartShopping />
            <p>Savat</p>
          </div>
          <div>
            <Image src={"/like.svg"} alt={"like"} width={100} height={100} />
            <p>Saralanganlar</p>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
