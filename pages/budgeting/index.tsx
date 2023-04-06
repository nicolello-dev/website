import Head from "next/head"
import { useState } from "react"

export default function Home() {

	const [formData, setFormData] = useState({
		"date": "",
		"amount": "",
		"notes": ""
	})

	function submitData(e: any) {
		e.preventDefault();
	}
	
	return <>
		<Head>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="icon" href="/favicons/favicon.ico"/>
			<link rel="manifest" href="/favicons/site.webmanifest" />
			<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
			<link rel="shortcut icon" href="/favicons/favicon.ico" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
			<meta name="theme-color" content="#ffffff" />
			<title>Ilaria Migone - budgeting app</title>
		</Head>
		<input onChange={(e) => setFormData({...formData, date: e.target.value})} value={formData.date} type="text" name="date" id="date" />
		<input onChange={(e) => setFormData({...formData, amount: e.target.value})} value={formData.amount} type="number" name="amount" id="amount" />
		<input onChange={(e) => setFormData({...formData, notes: e.target.value})} value={formData.notes} type="text" name="notes" id="notes" />
		<input type="submit" id="submit" onClick={ submitData }/>
	</>
}