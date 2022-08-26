import { Container } from 'react-bootstrap';
import FormBeverage from './components/FormBeverage';
import BeveragesList from './components/BeveragesList';
import ModalBeverage from './components/ModalBeverage';
import { CategoriesProvider } from './context/CategoriesProvider';
import { BeveragesProvider } from './context/BeveragesProvider';

function App() {
	return (
		<CategoriesProvider>
			<BeveragesProvider>
				<header className="py-5">
					<h1>Buscador de Bebidas</h1>
				</header>

				<Container className="mt-5">
					<FormBeverage />
					<BeveragesList />
					<ModalBeverage />
				</Container>
			</BeveragesProvider>
		</CategoriesProvider>
	);
}

export default App;
