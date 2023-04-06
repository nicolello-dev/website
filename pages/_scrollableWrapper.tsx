import scrollStyles from '../styles/scroll.module.css'
import { ReactNode } from 'react'

export default function ScrollableWrapper({ children }: { children: ReactNode }) {
	return (
		<>
			<div className={scrollStyles.scrollableWrapper}>
				{children}
			</div>
		</>
	)
}