/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 * https://github.com/Caldis/react-zmage
 */
// import React, { useState, useCallback } from 'react'
// import { render } from 'react-dom'
import '../styles/header.scss'
import Gallery from 'react-photo-gallery'

import fac1 from '../img/factory/1.jpeg'
import fac2 from '../img/factory/2.jpeg'
import fac3 from '../img/factory/3.jpeg'
import fac4 from '../img/factory/4.jpg'
import fac5 from '../img/factory/5.jpeg'
import fac6 from '../img/factory/6.jpeg'
import fac7 from '../img/factory/7.jpeg'
import fac8 from '../img/factory/8.jpeg'
import fac9 from '../img/factory/9.jpeg'

const photos = [
	{
		src: fac1,
		width: 1,
		height: 1
	},
	{
		src: fac2,
		width: 4,
		height: 3
	},
	{
		src: fac3,
		width: 1,
		height: 1
	},
	{
		src: fac5,
		width: 1,
		height: 1
	},
	{
		src: fac4,
		width: 4,
		height: 3
	},
	{
		src: fac6,
		width: 5,
		height: 3
	},
	{
		src: fac7,
		width: 5,
		height: 3
	},
	{
		src: fac8,
		width: 5,
		height: 3
	},
	{
		src: fac9,
		width: 5,
		height: 3
	}
]

function Factory() {
	return (
		<div>
			<Gallery photos={photos} />
		</div>
	)
}

export default Factory
