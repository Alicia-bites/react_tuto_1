import React from "react";
import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import PLantItem from "./plantItem";
import Categories from "./Categories"
import { useState } from "react";

function ShoppingList({cart, updateCart}) {

	const [filter, updateFilter] = useState("default");

	function addToCart(name, price) {

		// we look for the plant we want to find
		const currentPLantAdded = cart.find(plant => plant.name === name)

		// if it is already present in the cart
		if (currentPLantAdded) {
			// we filter out the item with the same as the one we want to add
			const cartFilteredCurrentPlant = cart.filter(plant => 
				plant.name !== name
			)
			
			// we make a copy of cart, minus the item that has the
			// same name as the one we want to add.
			// Then we add a new object, wich actually the one we filtered
			// out, but with an amount increased by 1.
			updateCart([...cartFilteredCurrentPlant, 
				{name, price, amount: currentPLantAdded.amount + 1}])
		}
		else {
			// we make a copy of cart and we add a new object {}
			updateCart([...cart, {name, price, amount: 1}])
		}
	}

	return (
	<div className="lmj-shopping-list">

		<Categories filter={filter} updateFilter={updateFilter} />
		<ul className="lmj-plant-list">
			{plantList
			.filter(plant => filter === "default" || plant.category === filter)
			.map(({id, cover, name, water, light, price}) => (
			<div key = {id}>
				<PLantItem 
					cover = {cover}
					name = {name}
					light = {light}
					water = {water}
					price = {price}
				/>
				<button onClick={() => addToCart(name, price)}>Ajouter</button>
			</div>
			))}
		</ul>

	</div>
	)
}

export default ShoppingList
