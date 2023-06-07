import { useState } from 'react'
import '../styles/Cart.css'
import { useEffect } from 'react'

function Cart({cart, updateCart}) {

	const [isOpen, setIsOpen] = useState(true)
		
	// reduce((accumulator, current) => action, initValue)
	const total = cart.reduce((accumulator, plant) => 
		accumulator + plant.price * plant.amount, 0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achat`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.map(
				({name, price, amount}, index) => 
				<div key = {`${name}-${index}`}>
					{name} {price} x {amount}
				</div>
			)}
			<div>
			</div>
			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart