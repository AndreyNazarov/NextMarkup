import laptop from "../../images/markup2Img/laptop.jpg";
import basket from "../../images/markup2Img/basket.jpg";
import fish from "../../images/markup2Img/fish.jpg";
import headphones from "../../images/markup2Img/headphones.jpg";
import box from "../../images/markup2Img/box.jpg";
import mac from "../../images/markup2Img/mac.jpg";
import book from "../../images/markup2Img/book.jpg";
import rope from "../../images/markup2Img/rope.jpg";
import app from "../../images/markup2Img/app.jpg";
import Layout from "../../components/Layout";
import s from "../../styles/styles.module.css";
export default function Task2(params) {
  return (
    <>
      <Layout>
        <main>
          <ul>
            <li>
              <button type="button" className={s.btnRadio}>
                All
              </button>
            </li>
            <li>
              <button type="button" className={s.btnRadio}>
                Web Sites
              </button>
            </li>
            <li>
              <button type="button" className={s.btnRadio}>
                Apps
              </button>
            </li>
            <li>
              <button type="button" className={s.btnRadio}>
                Design
              </button>
            </li>
            <li>
              <button type="button" className={s.btnRadio}>
                Marketing
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <img src={laptop} alt="laptop" width="370" height="404" />
            </li>
            <li>
              <img src={basket} alt="basket" width="370" height="404" />
            </li>
            <li>
              <img src={fish} alt="fish" width="370" height="404" />
            </li>
            <li>
              <img src={headphones} alt="headphones" width="370" height="404" />
            </li>
            <li>
              <img src={box} alt="box" width="370" height="404" />
            </li>
            <li>
              <img src={mac} alt="mac" width="370" height="404" />
            </li>
            <li>
              <img src={book} alt="book" width="370" height="404" />
            </li>
            <li>
              <img src={rope} alt="rope" width="370" height="404" />
            </li>
            <li>
              <img src={app} alt="app" width="370" height="404" />
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
}
