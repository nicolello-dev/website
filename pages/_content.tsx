import meStyles from "../styles/Me.module.css"
import Image from 'next/image'
import { useRouter } from "next/router"

export default function Content({ reverse, imageSrc, h3, link, children }:{reverse:string, imageSrc:string, h3: string, link: string, children: JSX.Element | JSX.Element[]}) {
	const router = useRouter()

	function func(e: any){
		e.preventDefault()
		router.push(link);
	}
	
	if(reverse=="true"){
		return <>
		    <div className={meStyles.imageWrapperReverse}>
				<div className={meStyles.contentbox}>
					<Image className={meStyles.image} src={imageSrc} alt="Not implemented" layout="fill" />
				</div>
				<div className={meStyles.content}>
					<h3 onClick={func}>{h3}</h3>
					{children}
				</div>
		    </div>
	</>} else {
		return <>
			<div className={meStyles.imageWrapper}>
				<div className={meStyles.content}>
					<h3 onClick={func}>{h3}</h3>
					{children}
				</div>
				<div className={meStyles.contentbox}>
					<Image className={meStyles.image} src={imageSrc} alt="Not implemented" layout="fill" />
				</div>
			</div>
		</>
	}
}