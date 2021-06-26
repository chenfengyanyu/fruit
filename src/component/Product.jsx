/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:06:13
 * https://github.com/Caldis/react-zmage
 */
import React, { useState, useCallback } from 'react'
// import { render } from 'react-dom'
import '../styles/header.scss'
// import Zmage from 'react-zmage'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import pro1 from '../img/product/1.jpeg'
import pro2 from '../img/product/2.jpeg'
import pro3 from '../img/product/3.jpeg'
import pro4 from '../img/product/4.jpeg'
import pro5 from '../img/product/5.jpeg'
import pro6 from '../img/product/6.jpeg'
import pro7 from '../img/product/7.jpeg'
import pro8 from '../img/product/8.jpeg'
import pro9 from '../img/product/9.jpeg'
import pro10 from '../img/product/10.jpeg'
import pro11 from '../img/product/11.jpeg'
import pro15 from '../img/product/15.jpeg'
import pro16 from '../img/product/16.jpeg'
import pro17 from '../img/product/17.jpeg'
import pro18 from '../img/product/18.jpeg'
import pro19 from '../img/product/19.jpeg'
import pro20 from '../img/product/20.jpeg'
import pro21 from '../img/product/21.jpeg'
import pro22 from '../img/product/22.jpeg'
import pro23 from '../img/product/23.jpeg'

const photos = [
	{
		src: pro1,
		width: 1,
		height: 1
	},
	{
		src: pro3,
		width: 1,
		height: 1
	},
	{
		src: pro2,
		width: 1,
		height: 1
	},
	{
		src: pro4,
		width: 1,
		height: 1
	},
	{
		src: pro11,
		width: 1,
		height: 1
	},
	{
		src: pro5,
		width: 1,
		height: 1
	},
	{
		src: pro6,
		width: 1,
		height: 1
	},
	{
		src: pro7,
		width: 1,
		height: 1
	},
	{
		src: pro8,
		width: 1,
		height: 1
	},
	{
		src: pro9,
		width: 1,
		height: 1
	},
	{
		src: pro10,
		width: 1,
		height: 1
	},
	{
		src: pro15,
		width: 1,
		height: 1
	},
	{
		src: pro16,
		width: 1,
		height: 1
	},
	{
		src: pro17,
		width: 1,
		height: 1
	},
	{
		src: pro18,
		width: 1,
		height: 1
	},
	{
		src: pro19,
		width: 1,
		height: 1
	},
	{
		src: pro20,
		width: 1,
		height: 1
	},
	{
		src: pro21,
		width: 1,
		height: 1
	},
	{
		src: pro22,
		width: 1,
		height: 1
	},
	{
		src: pro23,
		width: 1,
		height: 1
	}
]

function Project() {
	const [currentImage, setCurrentImage] = useState(0)
	const [viewerIsOpen, setViewerIsOpen] = useState(false)

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index)
		setViewerIsOpen(true)
	}, [])

	const closeLightbox = () => {
		setCurrentImage(0)
		setViewerIsOpen(false)
	}
	return (
		<div>
			<Gallery photos={photos} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	)
}

export default Project
