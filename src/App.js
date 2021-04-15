/** @format */

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="container pt-5">
			<Form className="mt-5">
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Ragione sociale</Form.Label>
					<Form.Control type="text" placeholder="Ragione sociale" />
				</Form.Group>
				<div className="row">
					<div className="col-md-6">
						{' '}
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Indirizzo</Form.Label>
							<Form.Control type="text" placeholder="Indirizzo" />
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Citt&agrave;</Form.Label>
							<Form.Control type="text" placeholder="Citt&agrave;" />
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						{' '}
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Provincia</Form.Label>
							<Form.Control type="text" placeholder="Provincia" />
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Partita iva</Form.Label>
							<Form.Control type="text" placeholder="Partita iva" />
						</Form.Group>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default App;
