/** @format */

import './index.scss'
import Header from '../component/Header2'
import Factory from '../component/Factory'
import Contact from '../component/Contact'
import Service from '../component/Service'
import Company from '../component/Company'
import Category from '../component/Category'

import VF1 from '../img/vf/1.jpeg'
import VF2 from '../img/vf/2.jpeg'
import VF3 from '../img/vf/3.jpeg'
import VF4 from '../img/vf/4.jpeg'
import VF5 from '../img/vf/5.jpeg'

function ProductPage() {
	return (
		<div className='container'>
			<Header></Header>
			<section className='first-content'>
				<Category />
			</section>
			<section className='first-content'>
				<div className='title'>VF(Vacuum Frying) Kiwi Slice</div>
				<p>
					VF Kiwi Slice is the is our key product. We are in the KIWI
					FRUIT TOWN. So we know KIWI Fruit very well. Our plant is an
					very professional producer in KIWI fruit slice for nearly 10
					years. We are the founder of Kiwi slice in china. Our plant
					have the very professional of equipment, We also have the
					very strict technology in producing of kiwi slice. Fresh
					Kiwi slice is fully peeled was soaked in light chemical
					solution (SO2+water) Washed in water and cooked for 40 min.
					added green color soaked in sugar solution (brix15%) for 24
					hrs. bring into deep frozen container for 50 hrs charge in
					vacuum vessel, cooked with oil under lower temperature of
					80℃ and -0.8 pressuer for 90min discharge and bring to
					cooling place for 30min, and packing in alu-folien bag cook
					oil is food grade palm oil. So we can say that nearly at
					least 80% of kiwi slice you buy from China are produced by
					us. We let other company export before. But now we sales to
					you directly.
				</p>
			</section>
			<section className='first-content'>
				<div className='detail'>
					<div class='photo'>
						<img src={VF1} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Colour and Taste</div>
						<p>
							Green or Yellow, Crispy, Sour and sweet with raw
							kiwi flavor
						</p>
						<p>We have a date with delicious</p>
						<p>The original color without pigment</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF2} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Food Additives</div>
						<p>Only delicacy and love can live up to </p>
						<p>Kiwi Slice, Sugar, Palm oil, Citric Acid</p>
						<p>The natural smell and taste of kiwi fruit</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF3} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Craft</div>
						<p>
							vacuum fried on the condition of low
							temperature(82-85℃)
						</p>
						<p>Let life have more flavor and make life better</p>
						<p>Crisp and refreshing, delicious and nutritious</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF4} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Coloring Additives</div>
						<p>
							Control the source, only for the best VF fruits and
							vegetables
						</p>
						<p>Share nature and health with you</p>
						<p>Green(yes) ; Yellow ( No.)</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF5} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Normal Size</div>
						<p>Want both delicious and nutrition</p>
						<p>Naturally fruity, locking in freshness</p>
						<p>Thickness: 0.6-0.8cm; Width: > 4.0cm</p>
					</div>
				</div>
			</section>
			<section className='first-content'>
				<div className='title'>Our Company</div>
				<p>
					Xi'an Topone Fruit Co., Ltd. is located in Zhouzhi County,
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
