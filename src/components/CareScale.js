function howMuch(amount) {
	switch (amount) {
		case 1: return 'un peu';
		case 2: return 'modérément';
		case 3: return 'beaucoup';
	}
}

function ofWhat(obj) {
	switch (obj) {
		case 'light' : return "de lumière"
		case 'water' : return "d'arrosage"
	}
}
function CareScale({scaleValue, careType}) {
	const range = [1, 2, 3]

	const scaleType = careType === "light" ? "🌞" : "💧";

	function handleClick() {
		alert("Cette plante requiert " + howMuch(scaleValue) 
			+ " " + ofWhat(careType))
	}

    return ( 
	<div
		onClick={handleClick}
	>
		{
			range.map((element) => 
				// ici, on attribue à chaque span une key, 
				// pour améliorer les perf de React
				scaleValue >= element ? 
					<span key = {element.toString()}>{scaleType}</span> 
					: 
					null
				)
		}
		
	</div>
	)
}
    
export default CareScale