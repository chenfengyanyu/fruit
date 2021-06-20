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

import about1 from '../img/about/1.jpeg'
import about2 from '../img/about/2.jpg'
import about3 from '../img/about/3.jpeg'

const photos = [
	{
		src: about1,
		width: 4,
		height: 3
	},
	{
		src: about2,
		width: 4,
		height: 3
	},
	{
		src: about3,
		width: 4,
		height: 3
	}
]

function About() {
	return (
		<div>
			<Gallery photos={photos} />
		</div>
	)
}

export default About
