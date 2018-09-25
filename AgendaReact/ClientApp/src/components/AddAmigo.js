import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export class AddAmigo extends Component {
  displayName = AddAmigo.name

	constructor(props) {
		super(props);
		this.state = { departamentos: [], ciudades: [], loading: true, departamento: 5 };

		fetch('api/Departamentos')
			.then(response => response.json())
			.then(data => {
				this.setState({ departamentos: data, loading: false });
			});

		fetch('api/Ciudades')
			.then(response => response.json())
			.then(data => {
				this.setState({ ciudades: data, loading: false });
			});

	}

	handleChangeDepto = event => {
		this.setState({ departamento : event.target.value });
	}

  render() {
	  return (
		  <form onSubmit={this.handleSubmit} className="form">
			  <FormGroup controlId="formControlsSelect">
				  <ControlLabel>Departamentos</ControlLabel>
				  <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeDepto}>
					  {this.state.departamentos.map(dpto =>
						  <option key={dpto.departamentoId} value={dpto.departamentoId}>{dpto.nombre}</option>
					  )};
				  </FormControl>
			  </FormGroup>
			
			<input type="submit" value="Submit" />
		</form>
    );
  }
}
