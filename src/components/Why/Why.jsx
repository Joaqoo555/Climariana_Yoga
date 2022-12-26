import style from "./why.module.css";
const Why = () => {
  return (
    <section className={style.container_options}>
      <h2 className={style.tittle}>¿Porque elgir a Climariana?</h2>

      <header className={style.head}>
        <p>
          Climariana es todo lo que necesitas para iniciar o avanzar tu práctica
          en casa. Comenza tu expericia dentro del mundo del yoga con:
        </p>
      </header>
        <div className={style.arrow}></div>
      <article className={style.option}>
        <p>Clases en vivo y en directo por medio de la plataforma zoom.</p>
      </article>
      <div className={style.arrow}></div>
      <article className={style.option}>
        <p>Clases personalizadas para quien las necesite.</p>
      </article>
    </section>
  );
};

export default Why;
