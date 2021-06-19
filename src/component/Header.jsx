/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 */

import '../styles/header.css'
import logoImg from '../img/logo.svg'

function App() {
	return (
		<div>
			<header id='header'>
				<div id='menu'>
					<div className='logo'>
						<img src={logoImg} width='100' height='100' />
					</div>
				</div>
				<div id='banner'></div>
			</header>
			<section className='first-content'>
				<div className='title'>
					Fruit processing at the highest level
				</div>
				<p>
					Over 800 fruit growers and organic farmers supply us with
					fresh, sun-ripened fruit from selected growing areas in
					South Tyrol and northern Italy. Modern technology and
					well-trained workers then transform the raw ingredients into
					a high-quality end product that meets the most exacting
					requirements of our international customer base. Not for
					nothing is Fructus Meran among the leading European
					manufacturers of stewed apples, stewed pears and frozen
					fruit.
				</p>
				<ul>
					<li>图片一</li>
					<li>图片二</li>
					<li>图片三</li>
				</ul>
			</section>
		</div>
	)
}

export default App
