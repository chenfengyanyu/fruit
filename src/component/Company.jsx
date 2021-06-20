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

import com1 from '../img/company/1.jpeg'
import com2 from '../img/company/2.jpeg'
import com3 from '../img/company/3.jpeg'

const photos = [
	{
		src: com1,
		width: 4,
		height: 3
	},
	{
		src: com2,
		width: 4,
		height: 3
	},
	{
		src: com3,
		width: 4,
		height: 3
	}
]

function Company() {
	return (
		<div>
			<Gallery photos={photos} />
		</div>
	)
}

export default Company
