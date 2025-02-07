import "./Header.css";
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
      <div className="header__address">

    

      </div>
      <div className="header__email"></div>
      <div className="header__phone"></div>
    </section>
  );
};

export default Header;
