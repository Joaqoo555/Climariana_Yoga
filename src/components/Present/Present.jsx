import React from 'react'
import img_climariana_background from "../../img/background-Climariana.png"
import style from "./present.module.css"


const Present = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.container_img}>
      <div className={style.sub_tittle}><h2>Tu estudio online</h2></div>
      <div className={style.arrow}>
      <svg className={style.more_arrows}>
      <polygon className={style.arrow_top} points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
      <polygon className={style.arrow_middle} points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
      <polygon className={style.arrow_bottom} points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    </svg>
      </div>
      <img src={img_climariana_background} className={style.img} alt="Climariana" />
      </div>
    </div>
  )
}

export default Present
