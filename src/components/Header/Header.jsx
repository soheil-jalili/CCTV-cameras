import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <HeaderAdress />
      <MainHeader>
        <Logo />
        <Search />
        <AuthAndShoppingCart />
      </MainHeader>

      <Navbar>
        <MenuDesktop />
      </Navbar>
    </header>
  );
};

const NavBtnCat = () => {
  return (
    <>
      <button className="nav__btn_category">
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1875 2.35938C0.941406 2.35938 0.75 2.16797 0.75 1.92188V0.828125C0.75 0.609375 0.941406 0.390625 1.1875 0.390625H12.5625C12.7812 0.390625 13 0.609375 13 0.828125V1.92188C13 2.16797 12.7812 2.35938 12.5625 2.35938H1.1875ZM1.1875 6.73438C0.941406 6.73438 0.75 6.54297 0.75 6.29688V5.20312C0.75 4.98438 0.941406 4.76562 1.1875 4.76562H12.5625C12.7812 4.76562 13 4.98438 13 5.20312V6.29688C13 6.54297 12.7812 6.73438 12.5625 6.73438H1.1875ZM1.1875 11.1094C0.941406 11.1094 0.75 10.918 0.75 10.6719V9.57812C0.75 9.35938 0.941406 9.14062 1.1875 9.14062H12.5625C12.7812 9.14062 13 9.35938 13 9.57812V10.6719C13 10.918 12.7812 11.1094 12.5625 11.1094H1.1875Z"
            fill="white"
          />
        </svg>
        دسـته بـندی محـصولات
      </button>
    </>
  );
};

const HeaderAdress = () => {
  return (
    <section className="header__adress__main">
      <div className="container">
        <div className="header__adress__wrapper">
          <HeaderAdressItem
            icon={
              <img src="/public/assets/icons/location.svg" alt="location" />
            }
            content="آدرس : شیراز، ملاصدرا، خیابان معدل، ساختمان ۵"
          />
          <HeaderAdressItem
            icon={<img src="/public/assets/icons/email.svg" alt="Email" />}
            content="ایمیل : meymandiarman@gmail.com"
          />
          <div className="header__phone">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.38011 1.91702C7.45057 1.9314 8.2134 2.73352 9.17844 3.7484C9.41707 3.99852 9.67486 4.27165 9.96332 4.55915C11.3615 5.95831 10.9638 7.09969 10.6428 8.01586C10.2939 9.0154 9.99207 9.8779 11.7995 11.6853C13.6069 13.4927 14.4684 13.1909 15.467 12.8391C16.3842 12.5191 17.5227 12.1185 18.9237 13.5176C19.2084 13.8023 19.4767 14.0572 19.7259 14.2939C20.7446 15.2637 21.5496 16.0294 21.5631 17.1028C21.5735 18.017 21.0177 18.9504 19.6454 20.3228L19.0378 19.9107L19.5524 20.4119C19.2486 20.7234 18.4407 21.5533 16.8585 21.5629H16.8298C14.4416 21.5629 11.328 19.6615 7.57515 15.9096C3.80699 12.1424 1.90278 9.01923 1.91707 6.62627C1.92578 5.04502 2.75474 4.23523 3.06619 3.93144L3.09278 3.9024L3.15724 3.83752C4.53244 2.46231 5.47736 1.8969 6.38011 1.91702ZM6.3619 3.35452H6.35424C5.92388 3.35452 5.27033 3.78577 4.35882 4.67117L4.17578 4.85092L4.17786 4.85048C4.17786 4.85048 4.16222 4.86842 4.13556 4.89561L4.07149 4.95973C3.83957 5.18494 3.35944 5.65356 3.3546 6.63394C3.34699 8.00531 4.24878 10.5516 8.59099 14.8929C12.9121 19.213 15.4546 20.1254 16.8298 20.1254H16.8499C17.8303 20.1196 18.2979 19.6395 18.5232 19.4085C18.5912 19.3386 18.6468 19.2859 18.6861 19.2542C19.6415 18.293 20.1303 17.5791 20.1255 17.12C20.1197 16.6524 19.538 16.1004 18.734 15.3346C18.4781 15.0922 18.2002 14.8267 17.9069 14.5335C17.146 13.7754 16.7713 13.9048 15.9424 14.1961C14.7972 14.5977 13.2284 15.1478 10.7837 12.7011C8.33799 10.2564 8.88615 8.68765 9.28578 7.54148C9.57519 6.71348 9.70745 6.33685 8.94749 5.57594C8.6504 5.27886 8.38303 4.99711 8.13674 4.73836C7.37582 3.93911 6.82669 3.36123 6.3619 3.35452ZM14.6113 5.32629C16.6056 5.71346 18.1457 7.25254 18.5338 9.24779C18.6095 9.63879 18.3555 10.0154 17.9665 10.0911C17.9195 10.0998 17.8735 10.1045 17.8275 10.1045C17.4902 10.1045 17.1902 9.86688 17.1231 9.52379C16.8471 8.10546 15.7537 7.012 14.3372 6.73696C13.9472 6.66125 13.6932 6.28463 13.769 5.89458C13.8447 5.50454 14.228 5.24963 14.6113 5.32629ZM14.5539 1.92248C18.462 2.35661 21.4971 5.38782 21.935 9.29494C21.9791 9.68978 21.6954 10.0453 21.3016 10.0894C21.2747 10.0923 21.2469 10.0942 21.2201 10.0942C20.8588 10.0942 20.5483 9.82298 20.5071 9.45594C20.1439 6.22061 17.6311 3.70978 14.3948 3.3504C14.001 3.30632 13.7163 2.95173 13.7604 2.5569C13.8036 2.16303 14.1553 1.87265 14.5539 1.92248Z"
                fill="white"
              />
            </svg>

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

const HeaderAdressItem = ({ icon, content }) => {
  return (
    <div className="header__item">
      {icon}
      <span>{content}</span>
    </div>
  );
};

const MainHeader = ({ children }) => {
  return (
    <section className="main__header">
      <div className="container">
        <div className="main__header__wrapper">{children}</div>
      </div>
    </section>
  );
};

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="logo">
        Logo
      </Link>
    </>
  );
};
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header__input">
        <div className="category__btn">
          <button onClick={() => setIsOpen(!isOpen)}>
            دسته بندی
            <svg
              className={isOpen ? "btn__cat-active" : ""}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.97994 5.31313C3.15745 5.13562 3.43523 5.11949 3.63097 5.26472L3.68705 5.31313L8.00016 9.62602L12.3133 5.31313C12.4908 5.13562 12.7686 5.11949 12.9643 5.26472L13.0204 5.31313C13.1979 5.49064 13.214 5.76842 13.0688 5.96416L13.0204 6.02024L8.35372 10.6869C8.1762 10.8644 7.89843 10.8806 7.70269 10.7353L7.64661 10.6869L2.97994 6.02024C2.78468 5.82498 2.78468 5.5084 2.97994 5.31313Z"
                fill="#43454D"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="category_items">
              <p>item1</p>
              <p>item1</p>
              <p>item1</p>
              <p>item1</p>
              <p>item1</p>
            </div>
          )}
        </div>
        <input type="text" placeholder="محصول مورد نظر را جستجو کنید" />
        <button className="search__btn">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6957 2.33331C19.9607 2.33331 25.0567 7.42931 25.0567 13.6943C25.0567 16.6501 23.9223 19.346 22.0661 21.3692L25.7186 25.0141C26.0605 25.356 26.0616 25.909 25.7198 26.2508C25.5495 26.4235 25.3243 26.5086 25.1003 26.5086C24.8775 26.5086 24.6535 26.4235 24.482 26.2531L20.7853 22.5668C18.8407 24.1241 16.3751 25.0565 13.6957 25.0565C7.43066 25.0565 2.3335 19.9593 2.3335 13.6943C2.3335 7.42931 7.43066 2.33331 13.6957 2.33331ZM13.6957 4.08331C8.3955 4.08331 4.0835 8.39415 4.0835 13.6943C4.0835 18.9945 8.3955 23.3065 13.6957 23.3065C18.9947 23.3065 23.3067 18.9945 23.3067 13.6943C23.3067 8.39415 18.9947 4.08331 13.6957 4.08331Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
const AuthAndShoppingCart = () => {
  return (
    <div className="header__auth__shopping_cart">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.2544 4.37559C15.0159 3.26192 17.3559 2.95426 19.3774 3.60209C23.7746 5.02017 25.1396 9.81392 23.9187 13.6283C22.0348 19.6192 13.9889 24.0879 13.6476 24.2753C13.5263 24.3425 13.392 24.3761 13.2576 24.3761C13.1233 24.3761 12.99 24.3436 12.8687 24.2775C12.5296 24.0923 4.54221 19.6896 2.59546 13.6294L2.59437 13.6283C1.37237 9.81284 2.73304 5.01801 7.12596 3.60209C9.18862 2.93476 11.4365 3.22834 13.2544 4.37559ZM7.62429 5.14909C4.06987 6.29526 3.17721 10.1183 4.14246 13.1333C5.66129 17.8588 11.6619 21.6797 13.2565 22.6254C14.8566 21.6699 20.9005 17.8068 22.3706 13.1376C23.3359 10.1194 22.44 6.29634 18.8801 5.14909C17.1555 4.59551 15.1437 4.93242 13.7549 6.00709C13.4645 6.23026 13.0615 6.23459 12.769 6.01359C11.2979 4.90751 9.37604 4.58359 7.62429 5.14909ZM17.8401 7.30048C19.3167 7.77823 20.3513 9.08581 20.478 10.6317C20.5138 11.0791 20.1812 11.4713 19.7338 11.5071C19.711 11.5092 19.6894 11.5103 19.6666 11.5103C19.2474 11.5103 18.892 11.1886 18.8574 10.7639C18.7859 9.8734 18.19 9.12156 17.3418 8.84748C16.9139 8.70881 16.6799 8.25056 16.8175 7.82481C16.9572 7.39798 17.4111 7.16615 17.8401 7.30048Z"
          fill="#A5A5A5"
        />
      </svg>

      <button className="btn__auth">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.493 19.7092C21.493 23.2798 16.5963 23.6926 12.9141 23.6926L12.6506 23.6924C10.3046 23.6867 4.33301 23.5385 4.33301 19.6875C4.33301 16.1897 9.03289 15.7222 12.6871 15.7046L13.1776 15.7043C15.5235 15.71 21.493 15.8581 21.493 19.7092ZM12.9141 17.3291C8.29801 17.3291 5.95801 18.1221 5.95801 19.6875C5.95801 21.267 8.29801 22.0676 12.9141 22.0676C17.5291 22.0676 19.868 21.2746 19.868 19.7092C19.868 18.1297 17.5291 17.3291 12.9141 17.3291ZM12.9141 2.16632C16.0861 2.16632 18.6655 4.74682 18.6655 7.91882C18.6655 11.0908 16.0861 13.6702 12.9141 13.6702H12.8794C9.71392 13.6605 7.14967 11.0789 7.16047 7.91557C7.16047 4.74682 9.74101 2.16632 12.9141 2.16632ZM12.9141 3.71332C10.5947 3.71332 8.70748 5.5994 8.70748 7.91882C8.69992 10.2307 10.573 12.1157 12.8827 12.1243L12.9141 12.8978V12.1243C15.2324 12.1243 17.1185 10.2372 17.1185 7.91882C17.1185 5.5994 15.2324 3.71332 12.9141 3.71332Z"
            fill="#43454D"
          />
        </svg>

        <span>ورود / ثبت نام</span>
      </button>

      <div className="shopping__cart">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shopping__cart__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7334 2.16632C15.4139 2.16632 17.5995 4.33609 17.6287 7.01303L17.8662 7.01413C20.8583 7.01413 23.2915 9.44621 23.2915 12.4362V18.4119C23.2915 21.4008 20.8583 23.8329 17.8662 23.8329H7.59184C4.60075 23.8329 2.1665 21.4008 2.1665 18.4119V12.4362C2.1665 9.44621 4.60075 7.01413 7.59184 7.01413L7.81284 7.01315L7.81971 6.80247C7.88774 5.57347 8.3939 4.44602 9.26245 3.58657C10.1919 2.66465 11.4399 2.20424 12.7334 2.16632ZM17.8662 8.63913L17.6289 8.63815L17.629 10.352C17.629 10.8005 17.265 11.1645 16.8165 11.1645C16.368 11.1645 16.004 10.8005 16.004 10.352L16.0039 8.63815H9.43675L9.43686 10.352C9.43686 10.8005 9.07286 11.1645 8.62436 11.1645C8.17586 11.1645 7.81186 10.8005 7.81186 10.352L7.81175 8.63815L7.59184 8.63913C5.49667 8.63913 3.7915 10.3421 3.7915 12.4362V18.4119C3.7915 20.5049 5.49667 22.2079 7.59184 22.2079H17.8662C19.9613 22.2079 21.6665 20.5049 21.6665 18.4119V12.4362C21.6665 10.3421 19.9613 8.63913 17.8662 8.63913ZM12.7302 3.79132C11.8516 3.82165 11.0283 4.12499 10.4064 4.74032C9.79364 5.34779 9.45017 6.15306 9.43722 7.01305L16.0018 7.01315L15.9985 6.87517C15.8987 5.15827 14.4716 3.79132 12.7302 3.79132Z"
            fill="#A5A5A5"
          />
        </svg>
        <div className="shopping__cart__icon-dot">
          <span>44</span>
        </div>
      </div>
    </div>
  );
};

// Navbar

const Navbar = ({ children }) => {
  return <nav className="nav">{children}</nav>;
};

const MenuDesktop = () => {
  return (
    <div className="container">
      <div className="nav__wrapper">
        <NavBtnCat />
        <ul className="menu__desk">
          <li className="menu__desk__item">
            <Link to={""} className="menu__desk__link">
              صفحه نخست
            </Link>
          </li>
          <li className="menu__desk__item">
            <Link to={""} className="menu__desk__link">
              آرشیو بلاگ
            </Link>
          </li>
          <li className="menu__desk__item">
            <Link to={""} className="menu__desk__link">
              فروشگاه
            </Link>
          </li>
          <li className="menu__desk__item">
            <Link to={""} className="menu__desk__link">
              سوالات متداول
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
