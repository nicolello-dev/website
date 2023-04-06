import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import scrollStyles from '../styles/scroll.module.css'

export function ScrollableWrapper({ children }: { children: ReactNode }) {
	return (
		<>
			<div className={scrollStyles.scrollableWrapper}>
				{children}
			</div>
		</>
	)
}

export function ScrollableContent({ src, link, h3, children }: { src: string, link:string, h3: string, children: ReactNode }) {
	let router = useRouter();
	function redirectToURL() {
		router.push(link);
	}
	return (
		<>
			<div className={scrollStyles.contentWrapper} onClick={redirectToURL}>
				<div className={scrollStyles.imageWrapper}>
					<Image className={scrollStyles.image} src={src} alt="Not implemented yet" layout="fill" />
				</div>
				<div className={scrollStyles.textWraper}>
					<h3>
						{h3}
					</h3>
					{children}
				</div>
			</div>
		</>
	)
}
