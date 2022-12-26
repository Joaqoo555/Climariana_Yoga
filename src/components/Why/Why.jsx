import style from "./why.module.css";
import {HiArrowLongDown} from "react-icons/hi2"
import desktop from "../../img/desktop.png"
import handshake from "../../img/handshake.png"
import Horario from "../Horarios/Horario";
import Footer from "../Footer/Footer";

const Why = () => {
  return (
    <main className={style.container_options}>
      <h2 className={style.tittle}>¿Porque elgir a Climariana?</h2>

      <header className={style.head}>
        <p>
          Climariana es todo lo que necesitas para iniciar o avanzar tu práctica
          en casa. Comenza tu expericia dentro del mundo del yoga con:
        </p>
      </header>
      <div className={style.arrow}>
      <HiArrowLongDown />
      </div>
      <article className={style.option}>
        
      <img src={desktop} alt="" className={style.img}/>
        <p>Clases en vivo y en directo por medio de la plataforma zoom.</p>
      </article>
      <div className={style.arrow}>
      <HiArrowLongDown/>
      </div>

      <article className={style.option}>
      <img src={handshake} alt="" className={style.img}/>

        <p>Clases personalizadas para quien las necesite.</p>
      </article>
      <Horario/>
      <Footer />
    </main>
  );
};

export default Why;
