import {useStates} from 'react'

import styles from './ProjectForm.module.css';
import Input from '../../form/Input';
import Select from '../../form/Select';
import SelectButtom from '../../form/SelectButtom';

function ProjectForm({btnText}){
	
	const categories [categories, setCategories] = useState([])
	return (
		<form className={styles.form}>
			<Input 
			type="text" 
			text="Nome do projeto"
			name="name" 
			placeholder="Insira o nome do projeto" 
			/>
			<Input
			type="number"
			text="Orçamento do projeto"
			name="budget"
			placeholder="Insira o orçamento total"
			/>
			<Select name="category_id" text="selecione a categoria" />
			<SelectButtom text={btnText}/>
		</form>
	)
}

export default ProjectForm;