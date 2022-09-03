import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovPro from './components/pages/NovPro';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
	return (
		<Router>
			<NavBar/>
			
			<Container customClass="min-height">
				<Routes>
					<Route exact path="/" element={<Home/>}>Home</Route>
					<Route path="/empresa" element={<Empresa/>}>Empresa</Route>
					<Route path="/contato" element={<Contato/>}>Contato</Route>
					<Route path="/novo-projeto" element={<NovPro/>}>Novo Projeto</Route>
					<Route path="/projects" element={<Projects/>}>Projetos</Route>
				</Routes>
			</Container>
			
			<Footer />
		</Router>
	);
}

export default App;
