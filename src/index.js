/**
 * @format
 * @Author: Jartto
 * @Date: 2021-03-28 20:48:26
 * @LastEditTime: 2021-06-16 08:07:28
 */

import 'lib-flexible'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import App from './home/App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import App from './home/App'
import Product from './product/index'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/vf-kiwi-silice' component={Product} />
				<Route path='/' component={App} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
