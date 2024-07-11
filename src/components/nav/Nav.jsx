import { useTranslation } from 'react-i18next'
import i18n from '../../locales/i18next'
import { Outlet } from 'react-router-dom'
import logo from '../nav/images/logo.png'
import infoto from '../nav/images/infoto.png'
import foto from '../nav/images/foto.png'
import foto10 from '../nav/images/foto10.jpg'
import foto11 from '../nav/images/foto11.jpg'
import icn from '../nav/images/icn.png'
import './nav.css'
import { t } from 'i18next'

const Nav = () => {

  const data = useTranslation();
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <nav className='nav'>

        <div className='nav-d'>
          <div className='nav-container'>
            <img src={logo} alt="" />

            <div className='nav-box'>

              <img className='in-foto' src={infoto} alt="" />
              <p>Hire Me</p>

            </div>

          </div>

          <div className='nav-c'>
            <div>
              <select className='nav-sel' defaultValue={data.i18n.language} onChange={(e) => {
                i18n.changeLanguage(e.target.value)
              }}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
              <Outlet />
            </div>

            <ul className='nav-ul'>
              <li>{t("PORTFOLIO")}</li>
              <li>{t("BLOG")}</li>
              <li>{t("CV")}</li>
              <li>{t("STORE")}</li>
              <li>{t("FREELANCE")}</li>
              <li>{t("ABOUT ME")}</li>
              <li>{t("CONTACT")}</li>
            </ul>
          </div>
        </div>
      </nav>

      <header className='header'>

        <div className='dis23'>

          <div>
            <h1>{t("Posts")}</h1>
            <h3>{t("think")}</h3>
            <p>{t("text")}</p>


            <div className='dis'>
              <div className='tvitter'>
                <div className='tvitter-box'>
                  <i class="fa-brands fa-twitter"></i>
                  <p>TWITTER</p>
                </div>
              </div>

              <div className='linkedin'>
                <div className='tvitter-box'>
                  <i class="fa-brands fa-linkedin-in"></i>
                  <p>LINKEDIN</p>
                </div>
              </div>

              <div className='medium'>
                <div className='tvitter-box'>
                  <i class="fa-brands fa-medium"></i>
                  <p>MEDIUM</p>
                </div>
              </div>

            </div>
          </div>


          <img className='img-f' src={foto} alt="" />
        </div>

      </header>


      <footer className='footer'>

        <ul className='footer-ul'>
          <li>{t("All")}</li>
          <li>{t("UX")}</li>
          <li>{t("Product")}</li>
          <li>{t("Articles")}</li>
          <li>{t("Tutorials")}</li>
          <li>{t("News")}</li>
        </ul>

        <div className='disple'>
          <div className='footer-divv'>

            <img className='img1' src={foto10} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>

          <div className='footer-divv'>

            <img className='img1' src={foto11} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>
        </div>

        <div className='disple'>
          <div className='footer-divv'>

            <img className='img1' src={foto10} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>

          <div className='footer-divv'>

            <img className='img1' src={foto11} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>
        </div>


        <div className='disple'>
          <div className='footer-divv'>

            <img className='img1' src={foto10} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>

          <div className='footer-divv'>

            <img className='img1' src={foto11} alt="" />

            <h5>{t("NOV")}</h5>
            <h2>{t("way")}</h2>
            <p>{t("quick")}</p>
            <h3>{t("more")}</h3>

          </div>
        </div>

      </footer>

      <div className='divdiv'>
        <img src={icn} alt="" />
        <h1>DADEL ARTWORK</h1>
      </div>


    </>


  )
}

export default Nav