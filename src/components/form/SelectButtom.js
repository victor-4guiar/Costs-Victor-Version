import styles from './SelectButtom.css';

function SelectButtom({text}){
	return(
		<div>
			<button className="btn">{text}</button>
		</div>
	)
}

export default SelectButtom;