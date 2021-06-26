/** @format */

import './index.scss'
import Header from '../component/Header2'
import Factory from '../component/Factory'
import Contact from '../component/Contact'
import Service from '../component/Service'
import Company from '../component/Company'
import Category from '../component/Category'

import VF1 from '../img/vf3/1.png'
import VF2 from '../img/vf3/2.png'
import VF3 from '../img/vf3/3.png'
import VF4 from '../img/vf3/4.png'
import VF5 from '../img/vf3/5.png'
import VF6 from '../img/vf3/6.png'
import VF7 from '../img/vf3/7.png'

function ProductPage() {
	return (
		<div className='container'>
			<Header></Header>
			<section className='first-content'>
				<Category />
			</section>
			<section className='first-content'>
				<div className='title'>Dried Kiwi Slice（Sugar Coated）</div>
				<p>
					Dried Kiwi Slice（Sugar Coated）is another of our key
					products. Our plant have the nearly 20 years of experiences
					in producing and export. We sales direct and indirect to the
					world markets very large quantity. We sales nearly about
					2000 MT/year. We have our very strict skill and very
					professional equipment. We are renew our skill every year
					and make sure our dried kiwi slice is fresh, health and
					delicious. We are happy to share the delicious with you.
				</p>
			</section>
			<section className='first-content'>
				<div className='detail'>
					<div class='photo'>
						<img src={VF1} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Color & Taste</div>
						<p>
							Bright green/yellow, translucent, sour and sweet
							with raw kiwi flavour
						</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF2} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>
							Ingredients & Food additives
						</div>
						<p>
							Kiwi Fresh Slice, Sulphite Dioxide, Citric Acid,
							Sugar
						</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF3} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Coloring Additives</div>
						<p>Green color:(YES) ；Yellow color (No)</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF4} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Package Detail</div>
						<p>
							<strong>Packing: </strong>1 kg/package* 10package/
							Carton
						</p>
						<p>
							<strong>Carton size: </strong>43*30*18cm or as per
							request
						</p>
						<p>
							<strong>Inner package: </strong>plastic bag and the
							outer package is carton
						</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF5} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Supply Detail</div>
						<p>
							<strong>Season: </strong>September (Fresh fruit)
						</p>
						<p>
							<strong>Supplying period: </strong>All year around
						</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF6} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Shelf Time</div>
						<p>
							12 months, store at dry and cool place, avoid
							sunshine
						</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF7} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>MOQ</div>
						<p>MOQ: 1000kgs( About 100 cartons)</p>
					</div>
				</div>
			</section>
			<section className='first-content'>
				<div className='title'>Our Company</div>
				<p>
					Xi'an Top1 Fruit Co., Ltd. is located in Zhouzhi County,
					the hometown of kiwifruit. We stay with kiwifruit day and
					night. We have our own Kiwi orchard. Three generations of us
					have been planting kiwifruit Our kiwifruit are green
					products, No pesticides, No pollution, we have the very good
					natural environment. Our farms provide a continuous supply
					of raw materials for our production and processing of Kiwi
					products. We have nearly 20 years of experience in R & D and
					production of macaques. Our fresh fruits and processed
					products have been exported to India, Russia, Vietnam,
					Thailand, Malaysia, Philippines, South Korea, Canada,
					Brazil, Panama, the United States, Canada and other
					countries in South America. 80% of the VF kiwi slice and
					Dried kiwi you purchased from China are produced by our
					factory. We are now going to export it directly to you. So
					that you can buy products with good quality and better
					price.
				</p>
				<Company />
			</section>
			<section id='service' className='first-content'>
				<Service />
				<Factory></Factory>
			</section>
			<section id='contact' className='first-content'>
				<Contact />
			</section>
		</div>
	)
}

export default ProductPage
