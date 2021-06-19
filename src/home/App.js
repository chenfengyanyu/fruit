/**
 * /*
 *
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 */
import './App.scss'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import Product from '../component/Product'
import Factory from '../component/Factory'
import Contact from '../component/Contact'
import Service from '../component/Service'
import intro1 from '../img/introduce/1.jpeg'
import intro2 from '../img/introduce/2.jpeg'
import intro3 from '../img/introduce/3.jpeg'

function App() {
	return (
		<div className='container'>
			<Header></Header>
			<section className='first-content'>
				<div className='title'>Where we are？</div>
				<p>
					The largest of KIWI Fruit Hometpwn in the world My hometown
					is Zhouzhi County, Xi'an City, Shaanxi Province, China. It
					is located in the south of Qinling mountain. It is a very
					old and mysterious place. This is the famous "hometown of
					Kiwi" in China. Our hometown has suitable soil and climate
					environment for kiwi fruit growth. We live in this land for
					generations. We have nearly 40 years of experience and
					history in planting kiwifruit. My grandfather and father
					make a living by planting kiwi fruit. We live next to kiwi
					every day. Kiwifruit is our neighbor, career and friend. We
					love our kiwifruit very much, we know kiwifruit very well,
					we know how to plant better kiwifruit, we constantly update
					and introduce new planting experience and new varieties of
					kiwifruit. I know when kiwifruit will blossom, when it will
					be pollinated, when it will bear fruit and when it will
					mature, just like understanding our own life.
				</p>
				<div className='introduce'>
					<Link to='/vf-kiwi-silice'>
						<img src={intro1} />
						<i className='desc'>VF KIWI SILICE</i>
					</Link>
					<Link to='/other-vf-fruit'>
						<img src={intro2} />
						<i className='desc'>OTHER VF FRUIT</i>
					</Link>
					<Link to='/dried-kiwi-slice'>
						<img src={intro3} />
						<i className='desc'>DRIED KIWI SLICE</i>
					</Link>
				</div>
			</section>
			<section id='product' className='first-content'>
				<div className='title'>Our Products</div>
				<p>
					Our products are divided into preserved & dry fruits, VF
					(vacuum frying) Kiwi chips, FD fruit (vacuum freeze drying
					products). Our key products are Kiwi products, including
					dried kiwi fruit slice and VF kiwi chips. We have nearly 20
					years of experiences in producing dried kiwi fruit
					slice.Most of the dried kiwi fruit slice you buy in China
					are produced by us, so the dried kiwi fruit slice is our
					biggest advantage. We have also developed a new product VF
					Kiwi chips, We are pushing our new product VF Kiwi chips to
					the international market. Let our customers enjoy better
					delicious food.
				</p>
				<Product />
			</section>
			<section id='service' className='first-content'>
				<Service />
				<Factory />
			</section>
			<section id='contact' className='first-content'>
				<Contact />
			</section>
		</div>
	)
}

export default App
