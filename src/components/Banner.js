import "../styles/Banner.css"

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

// syntax ES6, permet d'éviter les acollades au moment de l'import
export default Banner 