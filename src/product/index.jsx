/** @format */

import './index.scss'
import Header from '../component/Header2'
import Factory from '../component/Factory'
import Contact from '../component/Contact'
import Service from '../component/Service'

import VF1 from '../img/vf/1.png'
import VF2 from '../img/vf/2.png'
import VF3 from '../img/vf/3.png'
import VF4 from '../img/vf/4.png'
import VF5 from '../img/vf/5.png'
import VF6 from '../img/vf/6.png'
import VF7 from '../img/vf/7.png'
import VF8 from '../img/vf/8.png'
import VF9 from '../img/vf/9.png'
import VF10 from '../img/vf/10.png'

function ProductPage() {
	return (
		<div className='container'>
			<Header></Header>
			<section className='first-content'>
				<div className='title'>VF(VACUUM FRYING) KIWI SLICE</div>
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
				{/* <table className='params'>
					<tr>
						<td>Food additives</td>
						<td>Kiwi Slice, Sugar, Palm oil, Citric Acid</td>
					</tr>
					<tr>
						<td>Craft</td>
						<td>
							vacuum fried on the condition of low
							temperature(82-85℃)
						</td>
					</tr>
					<tr>
						<td>Appearance</td>
						<td>Green or Yellow</td>
					</tr>
					<tr>
						<td>Normal piece</td>
						<td>Thickness:0.6-0.8cm; Width: > 4.0</td>
					</tr>
					<tr>
						<td>Food additives</td>
						<td>Kiwi Slice, Sugar, Palm oil, Citric Acid</td>
					</tr>
				</table> */}
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
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF2} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Food Additives</div>
						<p>Kiwi Slice, Sugar, Palm oil, Citric Acid</p>
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
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF4} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Coloring Additives</div>
						<p>Green(yes) ; Yellow ( No.)</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF5} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Normal Size</div>
						<p>Thickness: 0.6-0.8cm; Width: > 4.0cm</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF6} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Package</div>
						<p>
							<strong>Carton: </strong>2kg*3 package/carton,
							6kg/Carton (carton size:47*41*27mm)
						</p>
						<p>
							<strong>Inner package: </strong>Aluminum Foil bag
							and the outer package is carton.
						</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF7} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Shelf life and Supply</div>
						<p>
							<strong>Shelf life: </strong>12 months, store at dry
							and cool place, avoid sunshine.
						</p>
						<p>
							<strong>Supply: </strong>All year around
						</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF8} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Frozen apple</div>
						<p>
							<strong>Slices: </strong>Green or Yellow Normal
							piece: Thickness:0.6-0.8cm; Width: > 4.0 SO2(g/kg)
						</p>
						<p>
							<strong>Packages: </strong>Appearance: Green or
							Yellow Normal piece: Thickness:0.6-0.8cm; Width: >
							4.0 SO2(g/kg)
						</p>
					</div>
				</div>
				<div className='detail'>
					<div class='photo'>
						<img src={VF9} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Frozen apple</div>
						<p>
							<strong>Slices: </strong>Green or Yellow Normal
							piece: Thickness:0.6-0.8cm; Width: > 4.0 SO2(g/kg)
						</p>
						<p>
							<strong>Packages: </strong>Appearance: Green or
							Yellow Normal piece: Thickness:0.6-0.8cm; Width: >
							4.0 SO2(g/kg)
						</p>
					</div>
				</div>
				<div className='detail2'>
					<div class='photo'>
						<img src={VF10} width='100%' height='100%' />
					</div>
					<div class='info'>
						<div className='title'>Frozen apple</div>
						<p>
							<strong>Slices: </strong>Green or Yellow Normal
							piece: Thickness:0.6-0.8cm; Width: > 4.0 SO2(g/kg)
						</p>
						<p>
							<strong>Packages: </strong>Appearance: Green or
							Yellow Normal piece: Thickness:0.6-0.8cm; Width: >
							4.0 SO2(g/kg)
						</p>
					</div>
				</div>
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
