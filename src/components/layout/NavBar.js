import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './NavBar.module.css';
import logo from '../../img/costs_logo.png';

function NavBar(){
	return(
		<nav className={styles.navbar}>
			<Link to="/">
				<img src={logo} alt="Costs Logo" />
			</Link>
			<ul className={styles.list}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/empresa">Empresa</Link>
				</li>
				<li>
					<Link to="/contato">Contato</Link>
				</li>
				<li>
					<Link to="/novo-projeto">Novo Projeto</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar;