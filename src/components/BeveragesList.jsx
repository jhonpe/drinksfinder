import { Row } from 'react-bootstrap';
import useBeverages from '../hook/useBeverages';
import Beverage from './Beverage';

const BeveragesList = () => {
	const { beverages } = useBeverages();
	return (
		<Row className="mt-5">
			{beverages.map((beverage) => (
				<Beverage key={beverage.idDrink} beverage={beverage} />
			))}
		</Row>
	);
};

export default BeveragesList;
