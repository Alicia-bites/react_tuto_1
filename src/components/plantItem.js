import CareScale from "./CareScale";
import "../styles/plantItem.css"

function plantItem({name, cover, id, light, water, price}) {
	return (
		<li 
			key = {id} 
			className="lmj-plant-item"
			// onClick={handleClick}
		>
			<img className='lmj-plant-item-cover' src = {cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
				<p>{price}€</p>
			</div>
		</li>
	)
}

export default plantItem
