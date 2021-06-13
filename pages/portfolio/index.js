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
        <main className={s.container}>
          <ul className={s.btnOption}>
            <li className={s.btnRadio}>
              <a>All</a>
            </li>
            <li className={s.btnRadio}>
              <a>Web Sites</a>
            </li>
            <li className={s.btnRadio}>
              <a>Apps</a>
            </li>
            <li className={s.btnRadio}>
              <a>Design</a>
            </li>
            <li className={s.btnRadio}>
              <a>Marketing</a>
            </li>
          </ul>
          <ul className={s.products}>
            <li className={s.item}>
              <img src={laptop} alt="laptop" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={basket} alt="basket" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={fish} alt="fish" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={headphones} alt="headphones" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={box} alt="box" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={mac} alt="mac" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={book} alt="book" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={rope} alt="rope" width="370" height="404" />
            </li>
            <li className={s.item}>
              <img src={app} alt="app" width="370" height="404" />
            </li>
          </ul>
        </main>
      </Layout>
    </>
  );
}
