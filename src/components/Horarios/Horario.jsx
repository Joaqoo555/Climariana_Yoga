import React from 'react'
import style from "./horario.module.css"
const Horario = () => {
  return (
    <div className={style.hor}>
      <h2>Horarios</h2>
        <div className={style.msg}><p>Los siguientes horarios pueden variar dependiendo la disponibilidad de la profesora.</p></div>
        <div className={style.calendar}>
            <div className={style.lunes}><p>lunes</p></div>
            <div className={style.martes}><p>martes</p></div>
            <div className={style.miercoles}><p>miercoles</p></div>
            <div className={style.jueves}><p>jueves</p></div>
            <div className={style.viernes}><p>viernes</p></div>
        </div>
    </div>
  )
}

export default Horario
