import { FC, ReactNode, forwardRef } from 'react'
import cn from 'classnames'
import styles from './underline.module.scss'
import { NONAME } from 'dns'

interface iUnderline {
  color: 'Red' | 'White' | 'Black'
  className?: string,
  width?: number,
  height: number,
  margin?: number
}

const Underline = forwardRef<HTMLDivElement, iUnderline>(({color, className, width, height, margin}) => {
  return (
    <div><hr className={cn(styles.underline, className, {
      [styles.underlineWhite]: color === 'White',
      [styles.underlineRed]: color === 'Red',
      [styles.underlineBlack]: color === 'Black',
    })}
    style={
		{
			width: `${width}px`,
			height: `${height}px`,
			margin: `${margin}px 0 ${margin}px 0`
		}
	}></hr></div>
  )
})

export default Underline;