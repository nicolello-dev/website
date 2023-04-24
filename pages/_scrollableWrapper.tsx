import scrollStyles from '../styles/scroll.module.css'
import { ReactNode, Children, useEffect } from 'react'

export default function ScrollableWrapper({ children }: { children: ReactNode }) {
	const len = Children.count(children);
	return (
		<>
			<div className={ len == 4 ? scrollStyles.scrollableWrapperFour : scrollStyles.scrollableWrapper}>
				{children}
			</div>
		</>
	)
}