import Link from "next/link";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      {" "}
      <h1>Savatda hozircha bo'sh</h1>
      <p>
        Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning
      </p>
      <Link to={"/"}>
        <button className="bbn">Katalogga o'tish</button>
      </Link>
      <Link to={"/"}>
        <button className="butonn">Asosiy ekranga</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
