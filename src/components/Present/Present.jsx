import React from 'react'
import img_climariana_background from "../../img/background-Climariana.png"
import style from "./present.module.css"
const Present = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.container_img}>
      <div className={style.sub_tittle}><h2>Tu estudio online</h2></div>
      <img src={img_climariana_background} className={style.img} alt="Climariana" />
      </div>
    </div>
  )
}

export default Present
