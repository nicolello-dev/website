import type { NextPage } from 'next'
import Header from './_header'
import Image from 'next/image'
import Head from 'next/head'
import meStyles from '../styles/Me.module.css'
import scrollStyles from '../styles/scroll.module.css'
import code from '../styles/code.module.css'
import ScrollableContent from './_scrollableContent'
import ScrollableWrapper from './_scrollableWrapper'
// import { useEffect, useState } from 'react'

const Home: NextPage = () => {

	// scrolling effect
	// const msg = "Ilaria migone - web and Python developer. ";
	// const chars = Array.from(msg);

	// const [scrollTitle, setScrollTitle] = useState(msg);

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 	  setScrollTitle(prevTitle => {
	// 		const lastChar = prevTitle.charAt(0);
	// 		const restChars = prevTitle.substring(1, prevTitle.length);
	// 		return restChars + lastChar;
	// 	  });
	// 	}, 120);
	
	// 	return () => clearInterval(intervalId);
	// }, [scrollTitle]);
	
	
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
			<title>Ilaria Migone - web and Python developer</title>
		</Head>
		<Header>
		</Header>
		<div className={meStyles.about_me}>
			<h1 id="me">
				Ciao!👋
			</h1>
		</div>
		<div className={meStyles.imageWrapper}>
			<div className={meStyles.contentbox}>
				<Image className={meStyles.image} src="/pfp.png" alt="me" layout="fill" />
			</div>
			<div className={meStyles.content}>
				<h2>
					I am Ilaria Migone, a web and Python developer based in Florence, Italy.
				</h2>
				<p>
					I&apos;m 18 years old and am a native speaker of Spanish and Italian.
					<br />
					I love playing the piano: I&apos;ve been playing it since I was 4.
					<br />
					My favorite composer is Chopin, but Rachmaninoff is a very good one too.
					<br />
					I am currently playing Chopin&apos;s &quot;Ballade no. 1 in G minor&quot;,
					and you can see my progress on youtube.
				</p>
			</div>
		</div>
		<div className={meStyles.imageWrapperReverse}>
			<div className={meStyles.content}>
				<h2>
					As you could probably tell, I love technology.
				</h2>
				<p>
					Since I was little I loved discovering how things were made,
					and when I grew up a little more,
					I started building stuff. First, it was just coding.
					I started with Python, perhaps 3 years ago,
					and never stopped. I then expanded my field of knowledge to robotics,
					building obstacle-avoiding cars and egg-safe cranes,
					and participating in the FIRST Tech Competition with my old school&apos;s robotics team.
				</p>
			</div>
			<div className={meStyles.contentbox}>
				<Image className={meStyles.image} src="/ftc.jpeg" alt="My team at FTC" layout="fill" />
			</div>
		</div>
		
		<div className={meStyles.about_me}>
			<h1 id="projects">
				Projects 👩‍💻
			</h1>
		</div>

		<div className={meStyles.project_type}>
			<h3>
				Data <span className={scrollStyles.scrollme}>(Scroll me! -&gt;)</span>
			</h3>
		</div>

		<ScrollableWrapper>
			<ScrollableContent
				src="/nba.jpg"
				link="https://replit.com/@Nicolello/NBA-Score-Scraping"
				h3="NBA score scraper">
				<p>
					A bot to scrape player data from all NBA games.
					<br/>
					A total of 3000 players&quot; game data is collected with the &apos;run&apos; button, then
					converted into a CSV and moved to Google Sheets.
					<br/>
					Made with Python and BeautifulSoup4.
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/dextools.png"
				link="https://replit.com/@Nicolello/Python-Selenium"
				h3="DexTools data scraper">
				<p>
					A program that takes the maximum market cap of an ETH-20 token on DexTools.
					<br/>
					Returns it in the form of an API for ease of use with other tools.
					<br/>
					Made with Python and Selenium.
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/parseJournal.png"
				link="https://replit.com/@Nicolello/parseJournal-1"
				h3="ParseJournal">
				<p>
					A program to transform some raw data into a custom format by my client.
					<br/>
					Made with Python.
				</p>
			</ScrollableContent>
		</ScrollableWrapper>

		<div className={meStyles.project_type}>
			<h3>
				Websites <span className={scrollStyles.scrollme}>(Scroll me! -&gt;)</span>
			</h3>
		</div>

		<ScrollableWrapper>
			<ScrollableContent
				src="/reduction.png"
				link="https://websiteforerikbutton.nicolello.repl.co/"
				h3="Data reduction">
				<p>
					A website that takes some numbers ( &gt; 80 ) and returns the same sequence,
					reduced to only 80 numbers, while maintaining the same data movement.
					<br/>
					Made with vanilla HTML, CSS and Javascript.
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/teatro.jpg"
				link="https://github.com/ilariiiiia/teatrocastelnuovo"
				h3="Theater website">
				<p>
					A website for my school&apos;s theater program. I am quite proud of it.
					<br/>
					It will be added to my school&apos;s website soon, and it will be updated with photos of us and our teachers.
					<br/>
					In the future, you might be able to buy tickets there
					<br/>
					Made with plain HTML, CSS, and Javascript
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/paninaro.png"
				link="https://github.com/ilariiiiia/Paninaro"
				h3="Paninaro">
				<p>
					A website for my high school students where they can buy sandwiches at the school cafeteria.
					<br/>
					Made with PHP, HTML, CSS and Javascript.
				</p>
			</ScrollableContent>
		</ScrollableWrapper>

		<div className={meStyles.project_type}>
			<h3>
				Others <span className={scrollStyles.scrollme}>(Scroll me! -&gt;)</span>
			</h3>
		</div>
		
		<ScrollableWrapper>
			<ScrollableContent
				src="/reddit-CLI.png"
				link="https://github.com/ilariiiiia/redditCLI"
				h3="Reddit CLI">
				<p>
					An old school approach to a nerdy site.
					<br />
					Written in Python, using praw.
					<br />
					More about it <a href="https://github.com/ilariiiiia/redditCLI" target="_blank" rel="noreferrer">here</a>
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/rock-paper-scissor.png"
				link="https://github.com/ilariiiiia/RockPaperScissorBattle"
				h3="Rock, paper, scissor">
				<p>
					With a mechanism similar to the Rock, Paper, Scissor game,
					in which 50 dots of each color try to eat one another.
					<br />
					Made with Python, using pygame.
					<br />
					More about it&nbsp;
					<a href="https://github.com/ilariiiiia/RockPaperScissorBattle" target="_blank" rel="noreferrer">here</a>
					<br />
					Play it on replit&nbsp;
					<a href="https://replit.com/@Nicolello/RockPaperScissorBattle" target="_blank" rel="noreferrer">here</a>
				</p>
			</ScrollableContent>
			<ScrollableContent
				src="/newton.png"
				link="https://github.com/ilariiiiia/Newton-Rhapson-Method"
				h3="Newton-Rhapson method">
				<p>
					A really fast way to find the zero of a function, made step by step.
					<br />
					Insert a function, put a starting point and press enter to do it step-by-step.
					Made for my class
					<br />
					Written in Python, using pygame.
					<br />
					More about it&nbsp;
					<a href="https://github.com/ilariiiiia/Newton-Rhapson-Method" target="_blank" rel="noreferrer">here</a>
					<br />
					View it on replit&nbsp;
					<a href="https://replit.com/@Nicolello/Newton-Rhapson-Method" target="_blank" rel="noreferrer">here</a>
				</p>
			</ScrollableContent>
		</ScrollableWrapper>
		<div className={meStyles.about_me}>
			<h1 id="contact">
				Contact ☎
			</h1>
		</div>
		<footer className={code.footer}>
			<code className={code.code}>
				<div>
				<p className={code.lightblue}>let&nbsp;</p>
				<p className={code.white}>Ilaria&nbsp;</p>
				<p className={code.red}>=&nbsp;</p>
				<p className={code.red}>new&nbsp;</p>
				<p className={code.green}>Person&nbsp;</p>
				<p className={code.red}>(</p> 
				</div>
				<div>
				<p className={code.orange}>&emsp; &emsp; email&nbsp;</p>
				<p className={code.red}>=</p>
				<a className={code.underline} href="mailto:nicolamigone179@gmail.com">&quot;nicolamigone179@gmail.com&quot;</a><span className={code.white}>,</span>
				</div>
				<div>
				<p className={code.orange}>&emsp; &emsp; github&nbsp;</p>
				<p className={code.red}>=</p>
				<a className={code.underline} href="https://github.com/ilariiiiia">&quot;ilariiiiia&quot;</a><span className={code.white}>,</span>
				</div>
				<div>
				<p className={code.orange}>&emsp; &emsp; instagram&nbsp;</p>
				<p className={code.red}>=</p>
				<a className={code.underline} href="https://instagram.com/i_called_my_teacher_mom">&quot;I_called_my_teacher_mom&quot;</a>
				</div>
				<p className={code.red}>)<span className={code.white}>;</span></p>
			</code>
		</footer>
	</>
}

export default Home
