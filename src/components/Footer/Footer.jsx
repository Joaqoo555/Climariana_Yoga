import style from "./footer.module.css"
import F from "../../img/facebook.png"
import I from "../../img/instagram.png"
import T from "../../img/telegram.png"
import W from "../../img/whatsapp.png"
const Footer = () => {

  return (
    <footer className={style.footer}>
        <h2>Contactame</h2>
        <div className={style.contact}>
          <p>Para contactar pueden ingresar a alguna de las siguientes redes:</p>
          <hr />
        <div className={style.icons}>
          <a href="https://www.instagram.com/climariana_nqn/"><img src={I} alt="Instagram" className={style.icon} title="Instagram"/></a>
          <a href="https://www.facebook.com/Climariana"><img src={F} alt="Facebook" className={style.icon} title="Facebook"/></a>
          <a href="https://wa.me/2994724128"><img src={W} alt="Whatsapp" className={style.icon} title="Whatsapp"/></a>
          <a href="https://t.me/Marusseven"><img src={T} alt="Telegram" className={style.icon} title="Telegram"/></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer
