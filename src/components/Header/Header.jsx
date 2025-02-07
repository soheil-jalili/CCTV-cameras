import "./Header.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <HeaderAdress />
    </header>
  );
};

const HeaderAdress = () => {
  return (
    <section className="header__adress__main">
      <div className="container">
        <div className="header__adress__wrapper">
          <div className="header__address">
            <img src="/public/assets/icons/location.svg" alt="location" />
            <span className="header__address-content ">
              آدرس : شیراز، ملاصدرا، خیابان معدل، ساختمان ۵
            </span>
          </div>
          <div className="header__email">
            <img src="/public/assets/icons/email.svg" alt="Email" />
            <span>ایمیل : meymandiarman@gmail.com</span>
          </div>
          <div className="header__phone">
            <FaPhoneVolume color="#fff" width={23} height={23} />
            <span>شماره تماس و پشتیبانی</span>

            <span>
              <span className="phone__number__first">۰۹۲۱ </span> ۲۳۴ ۴۵۶۶
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
