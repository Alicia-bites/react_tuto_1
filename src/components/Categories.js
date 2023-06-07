import { plantList } from "../data/plantList";

function Categories({filter, updateFilter}) {

	const myCategories = [];
	for (let i = 0; i < plantList.length; i++) {
		if (!(myCategories.includes(plantList[i].category)))
			myCategories.push(plantList[i].category);
	}

	function handleCategorieChange(e) {
		// console.log("pouet = " + e.target.value)
		updateFilter(e.target.value)
	}

	return (
	<div>
		<select 
		name="myCategories" 
		id="cat-select"
		onChange={handleCategorieChange}
		>
				<option value="default">Choisissez la catégorie</option>
				{myCategories.map(
				(cat, index) =>
					<option key={`${cat}-${index}`} value={cat}>{cat}</option>
				)}
		</select>
	</div>
	)
}

export default Categories