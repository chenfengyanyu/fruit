/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 */

import '../styles/header.scss'
import logoImg from '../img/logo.svg'
import { Link } from 'react-router-dom'
import HomeImg from '../img/home.svg'

function App() {
	return (
		<div>
			<header id='header'>
				<div id='menu'>
					<div className='logo'>
						<img alt='logo' src={logoImg} width='80' height='80' />
						<div className='title'>Top1 Fruit</div>
						<div className='desc'>
							From Kiwi Fruit Hometown's Delicious
						</div>
						<div className='nav'>
							<Link to='/'>Home</Link>
							<Link className='active' to='/vf-kiwi-silice'>
								Products
							</Link>
							<a href='#service' name='service'>
								Service
							</a>
							<a href='#contact' name='contact'>
								Contact
							</a>
						</div>
					</div>
					<div className='homeicon'>
						<Link to='/'>
							<img src={HomeImg} />
						</Link>
					</div>
				</div>
				<div id='banner'></div>
			</header>
		</div>
	)
}

export default App
