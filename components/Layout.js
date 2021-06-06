import Head from "next/head";
import Link from "next/link";
import * as s from "../styles/styles.module.css";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is test markup in next" />
        <meta charSet="utf-8" />
      </Head>
      <header>
        <nav>
          <ul className={s.navList}>
            <Link href={"/"} exact>
              <a className={s.logo}>
                Web<span className={s.logoDecoration}>Studio</span>
              </a>
            </Link>
            <Link href={"/"} exact>
              <a className={s.nav}>Studio</a>
            </Link>
            <Link href={"/portfolio"} exact>
              <a className={s.nav}>Portfolio</a>
            </Link>
            <Link href={"/contacts"} exact>
              <a className={s.nav}>Contacts</a>
            </Link>
          </ul>
        </nav>
        <div>
          <ul className={s.info}>
            <li>info@devstudio.com</li>
            <li>+38 096 111 11 11</li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <ul className={s.navList}>
          <li>
            <a className={s.logo}>
              Web<span className={s.logoDecoration}>Studio</span>
            </a>

            <address>
              c. Berlin, <br />
              Ivana Franka, h. 26, <br />
              4th floor office 427
            </address>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
