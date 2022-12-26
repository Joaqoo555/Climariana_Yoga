import style from "./header.module.css";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <header>
      <div className={style.content_header}>
        {" "}
        <h1 className={style.tittle}>Climariana</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
