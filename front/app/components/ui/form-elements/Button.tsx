import React, { FC } from 'react'
import { IButton } from './form.interface'
import cn from 'classnames'
import styles from './form.module.scss'

const Button:FC<IButton> = ({children, className, ...rest}) => {
  return <button className={cn(styles.button, className)} {...rest}>
    {children}
  </button>
    
}

export default Button