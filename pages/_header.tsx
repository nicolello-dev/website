import headerStyles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header(props: any){
	return <>
	<div className={headerStyles.headerAlert}>
		<p>
			This site is still work in progress!
		</p>
	</div>
	<div className={headerStyles.headerWrapper}>
		<div className={headerStyles.headerLeft}>
			<Image className={headerStyles.pfp} src="/letter.jpg" alt="" width="45" height="45"/>
		</div>
		<div className={headerStyles.headerRight}>
			<a href="#me"> Me </a>
			<a href="#projects"> Projects </a>
			<a href="#contact"> Contact </a>
		</div>
	</div>
	</>
}