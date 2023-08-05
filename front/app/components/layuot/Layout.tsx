import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props>    = ({children}):any => {
  return (
    <div className={styles.layout}>
        <Navigation/>
        <div className={styles.center}>{children}</div>
        <Sidebar/>
    </div>
  )
}

export default Layout