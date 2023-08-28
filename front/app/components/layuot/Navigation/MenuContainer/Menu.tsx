import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenu } from './menu.interface'
import MenuItem from './MenuItem'
import { AuthItems } from './auth/AuthItems'

const Menu:FC<{menu:IMenu}> = ({menu:{items,title}}) => {
  return (
    <div className={styles.menu}>
        <div className={styles.heading}>{title}</div>
        <ul className={styles.ul}>
            {items.map(item=>(
                <MenuItem key={item.link} item={item}/>
            ))}
            {title === 'General' ? <AuthItems/> : null}
        </ul>
    </div>
  )
}

export default Menu