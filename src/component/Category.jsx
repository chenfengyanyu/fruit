/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 */
import { Link } from 'react-router-dom'
import intro1 from '../img/introduce/1.jpeg'
import intro2 from '../img/introduce/2.jpeg'
import intro3 from '../img/introduce/3.jpeg'

function Category() {
	return (
		<div>
			<div className='title'>Product Category</div>
			<p>
				Our products are divided into three categories, Dried kiwi
				slices and VF kiwi slices are loved by friends from all over the
				world. All the fresh kiwifruit is processed on our own farm. We
				produce the kiwi fruit products in our own factory.We control
				every step from raw materials to finished products. We also
				produce other vegetable and fruit products. We are looking
				forward to sharing our delicious food with you.
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
		</div>
	)
}

export default Category
