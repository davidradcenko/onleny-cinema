import { FC } from "react"
import styles from './sidebar.module.scss'
import Search from "./Search/Search"

const Sidebar:FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search/>
    </div>
  )
}

export default Sidebar