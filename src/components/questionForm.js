import { useState } from 'react'

// En gros, tout ce code sert à récupérer ce qu'utilisateur
// écrit dans une zone de texte
function QuestionForm() {
	// 1 - On crée une variable qui va récupérer l'input du user : inputValue
	// 2 - On crée une fonction qui permet d'update cette valeur chaque fois 
	// qu'elle est modifiée par le user
    const [inputValue, setInputValue] = useState('Posez votre question ici')

	// 6 - On crée une fonction qui sera appelée chaque que onChange est triggered
	function handleChange(e) {
		// 7 - Dans cette fonction, on met à jour la valeur de inputValue, qui a été modifée par le user
		setInputValue(e.target.value);
	}

	// 3 - On crée une zone de texte avec la balise <textarea>. Elle a deux attributs : value, et onChange
	// 4 - Value => Elle peut contenir une valeur par défaut, ici "Posez votre etc..."
	// 5 - onChange => c'est un event handler de react qui est triggered quand la valeur d'input ou d'un élément sélectionné est modifiée
	return (
        <div>
            <textarea
                value={inputValue}
				onChange = {handleChange}
            />
        </div>
    )
}

export default QuestionForm