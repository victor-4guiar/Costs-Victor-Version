import styles from './NovPro.module.css';
import ProjectForm from './ProjectForm'

function NovPro(){
	return(
		<div className={styles.newproject_container}>
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>
			<ProjectForm btnText="Criar Projeto" />
		</div>
	)
}

export default NovPro;