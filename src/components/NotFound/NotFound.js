import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div  className={styles.container}>
      <div>
      <h3>صفحه ای که به دنبال آن بودید پیدا نشد!</h3>
      <Link to="/">صفحه اصلی</Link>
      </div>
      <div className={styles.img}></div>
    </div>
  )
}

export default NotFound