import "./Poster.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Poster() {
  return (
    <section className="container poster">
      <div className="secondary__container">
        <div className="poster__wrapper">
          <div className="poster__img">
            <img src="public\assets\images\poster\pngwing.png" alt="camera1" />
          </div>
          <div className="poster__content">
            <p className="poster__text">از هر جایی میتونی چک کنی!</p>

            <h1 className="poster__content-h1">دوربین های مداربسته داهوا</h1>

            <div className="poster__buy">
              <p className="btn__buy">خرید</p>
              <Link className="poster__btn__buy-icon" to={""}>
                <FaArrowLeft color="#7b63ff" />
              </Link>
            </div>
          </div>

          <img
            src="public\assets\images\poster\pngwing5.png"
            alt="camera1"
            className="poster1"
          />

          <img
            src="public\assets\images\poster\pngwing6.png"
            alt="camera1"
            className="poster2"
          />
        </div>
      </div>
    </section>
  );
}
