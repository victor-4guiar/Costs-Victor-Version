import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovPro from './components/pages/NovPro';
import Container from './components/layout/Container'

function App() {
	return (
		<Router>
			<div>
				<Link to="/">Home</Link>
				<Link to="/empresa">Empresa</Link>
				<Link to="/contato">Contato</Link>
				<Link to="/novo-projeto">Novo Projeto</Link>
			</div>
			
			<Container customClass="min-height">
				<Routes>
					<Route exact path="/" element={<Home/>}>Home</Route>
					<Route path="/empresa" element={<Empresa/>}>Empresa</Route>
					<Route path="/contato" element={<Contato/>}>Contato</Route>
					<Route path="/novo-projeto" element={<NovPro/>}>Novo Projeto</Route>
				</Routes>
			</Container>
			
			<p>Footer</p>
		</Router>
	);
}

export default App;
