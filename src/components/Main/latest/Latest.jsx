import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import "./Latest.css";

export default function Latest() {
  return (
    <section className="latest container">
      <Amzaing />
      <ProductMainLatest />
    </section>
  );
}

const ProductMainLatest = () => {
  return (
    <div>
      <LatestAppbar />

      <div className="all__products">
        <Products discount={15} price={"۵۴/۲۰۰"} />
        <Products discount={15} price={"۵۴/۲۰۰"} />
        <Products discount={15} price={"۵۴/۲۰۰"} />
      </div>
    </div>
  );
};

const Products = ({ discount, img, title, desc, price }) => {
  return (
    <div className="products">
      <div className="prodcut__discount">
        <p>%{discount} تخفیف</p>
      </div>

      <div className="products__main">
        <img src="public\assets\images\products\ipad.png" alt={title} />

        <p className="product__title">آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت</p>
        <p className="product__desc">Apple Ipad Mini 2021 (wifi)</p>
        <p className="product__title">{price} تومان</p>
      </div>

      <button className="products__btn">افزودن به سبد خرید</button>
    </div>
  );
};

const LatestAppbar = () => {
  return (
    <div className="latest__appbar">
      <img src="/public/assets/icons/amazing_bed.svg" alt="Bed" />
      <p className="latest__appbar__title">جدیدترین دیتا پروژکتور ها</p>

      <Link to={"/"} className="view__all__btn">
        مشاهده همه <FaAngleLeft size={20.67} />
      </Link>
    </div>
  );
};

const Amzaing = () => {
  return (
    <div className="amazing">
      <p className="amazing__text">شگفت انگیز های دیتا پرژکتور</p>

      <div className="amazing__content">
        <img src="public\assets\images\amazing\camera.png" alt="" />
      </div>

      <p className="amazing__title">ویدئو پروژکتور ونبو مدل T2 Max</p>

      <p className="amazing__discount">۱۱/۰۰۰/۰۰۰</p>

      <p className="amazing__price">۱۰/۲۹۹/۰۰۰</p>
    </div>
  );
};
