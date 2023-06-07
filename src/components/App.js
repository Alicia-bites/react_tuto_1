import logo from "../assets/logo.png"
import "../styles/Layout.css"

import Banner from './Banner'
import React, { useEffect, useState } from 'react'
import ShoppingList from './ShoppingList'
import Footer from './footer'
import Cart from './Cart'

// JSON.parse --> transforme une string json en object
// JSON.stringify --> transforme un objet en string json

function App () {

	// on crée une variable pour stocker le contenu de notre cart meme quand la page est rafraichie
	const savedCart = localStorage.getItem('cart')

	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

	// à chaque fois que l'object est re-rendered ET que l'objet cart est modifié
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<React.Fragment>
			<Banner>
				<img src={logo} alt="La Maison Jungle" className="lmj-logo" />
				<h1 className="lmj-title">La Maison Jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'> 
				<Cart cart = {cart} updateCart = {updateCart} />
				<ShoppingList cart = {cart} updateCart = {updateCart} />
			</div>
			<Footer />
		</React.Fragment>
	)
}

export default App