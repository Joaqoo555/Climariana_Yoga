import style from "./header.module.css";
const Header = () => {
  return (
    <header>
      <div className={style.content_header}>
        {" "}
        <h1 className={style.tittle}>Climariana</h1>
      </div>
    </header>
  );
};

export default Header;
