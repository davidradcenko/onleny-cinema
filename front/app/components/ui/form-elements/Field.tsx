import React, { FC, forwardRef } from 'react'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement,IField>(({placeholder,error,type='text',style,...rest}) => {
  return (
    <div>Field</div>
  )
})

Field.displayName='Field'

export default Field