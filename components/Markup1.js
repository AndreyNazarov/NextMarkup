import phone from "../images/markup1Img/phone.png";
import tablet from "../images/markup1Img/tablet.png";
import comp from "../images/markup1Img/comp.png";
import girl from "../images/markup1_2Img/girl.jpg";
import red from "../images/markup1_2Img/red.jpg";
import beard from "../images/markup1_2Img/beard.jpg";
import smile from "../images/markup1_2Img/smile.jpg";
import Orange from "../images/icons3Edit/Orange";
import Yaco from "../images/icons3Edit/Yaco";
import Window from "../images/icons3Edit/Window";
import Fooster from "../images/icons3Edit/Fooster";
import Leaf from "../images/icons3Edit/Leaf";
import Box from "../images/icons3Edit/Box";
import Facebook from "../images/icons3Edit/Facebook";
import Instagram from "../images/icons3Edit/Instagram";
import Twitter from "../images/icons3Edit/Twitter";
import LinkedIn from "../images/icons3Edit/Linkedin";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import s from "../styles/styles.module.css";
import { useState } from "react";
export default function Task1(params) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <div className={s.overlay}>
        <section className={s.section}>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Simple centered modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
          </Modal>
          <h1 className={s.heroHead}>Effective solutions for your business</h1>
          <button type="button" className={s.btnService} onClick={onOpenModal}>
            Order service
          </button>
        </section>
      </div>
      <main className={s.container}>
        <section>
          <div>
            {" "}
            <ul className={s.purpose}>
              <li className={s.goals}>
                <h3 className={s.goalTitle}>Attention to detail</h3>
                <p>
                  Ideological considerations, as well as the beginning of the
                  daily work of forming a position.
                </p>
              </li>
              <li className={s.goals}>
                <h3 className={s.goalTitle}>Punctuality</h3>
                <p>
                  The task of the organization, especially the framework and
                  place of training of personnel entails.
                </p>
              </li>
              <li className={s.goals}>
                <h3 className={s.goalTitle}>Planning</h3>
                <p>
                  Likewise, consultation with a broad asset is pretty much
                  conditional.
                </p>
              </li>
              <li className={s.goals}>
                <h3 className={s.goalTitle}>Modern technologies</h3>
                <p>
                  The significance of these problems is so obvious that the
                  implementation of planned targets.
                </p>
              </li>
            </ul>
          </div>
          <h2 className={s.aboutUs}>What are we doing</h2>
          <ul className={s.objects}>
            <li className={s.appImg}>
              <img
                src={comp}
                width="370"
                height="294"
                alt="computer"
                className={s.img}
              />
              <p className={s.aboutImg}>desktop applications</p>
            </li>
            <li className={s.appImg}>
              <img
                src={phone}
                width="370"
                height="294"
                alt="computer"
                className={s.img}
              />
              <p className={s.aboutImg}>mobile applications</p>
            </li>
            <li className={s.appImg}>
              <img
                src={tablet}
                width="370"
                height="294"
                alt="computer"
                className={s.img}
              />
              <p className={s.aboutImg}>design solutions</p>
            </li>
          </ul>
        </section>
        <section className={s.sectionWithBlue}>
          <h2 className={s.aboutTeam}>Our team</h2>
          <ul className={s.team}>
            <li className={s.member}>
              <img
                src={red}
                width="270"
                height="260"
                alt="dude in red clothe"
              />
              <h3 className={s.memberName}>Fred Bran</h3>
              <p className={s.aboutMember}>Product designer</p>
              <div className={s.socialIcons}>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Instagram />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Twitter />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Facebook />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </li>
            <li className={s.member}>
              <img src={girl} width="270" height="260" alt="girl" />
              <h3 className={s.memberName}>Cindy Howard</h3>
              <p className={s.aboutMember}>Frontend developer</p>
              <div className={s.socialIcons}>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Instagram />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Twitter />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Facebook />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </li>
            <li className={s.member}>
              <img src={smile} width="270" height="260" alt="dude with smile" />
              <h3 className={s.memberName}>Mykola Tarasov</h3>
              <p className={s.aboutMember}>Marketing</p>
              <div className={s.socialIcons}>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Instagram />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Twitter />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Facebook />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </li>
            <li className={s.member}>
              <img src={beard} width="270" height="260" alt="dude with beard" />
              <h3 className={s.memberName}>Tony Schwarz</h3>
              <p className={s.aboutMember}>UI Designer</p>
              <div className={s.socialIcons}>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Instagram />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Twitter />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <Facebook />
                  </a>
                </div>
                <div className={s.iconGround}>
                  <a className={s.icon}>
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2 className={s.aboutUs}>Regular customers</h2>
          <ul className={s.customers}>
            <li className={s.customer}>
              <Yaco className={s.customerIcon} />
            </li>
            <li className={s.customer}>
              <Window className={s.customerIcon} />
            </li>
            <li className={s.customer}>
              <Orange className={s.customerIcon} />
            </li>
            <li className={s.customer}>
              <Fooster className={s.customerIcon} />
            </li>
            <li className={s.customer}>
              <Leaf className={s.customerIcon} />
            </li>
            <li className={s.customer}>
              <Box className={s.customerIcon} />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
