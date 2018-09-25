import React, { Component } from 'react';

export class Home extends Component {
	displayName = Home.name

	constructor(props) {
		super(props);
		this.state = { amigos: [], loading: true };

		fetch('api/Amigos')
			.then(response => response.json())
			.then(data => {
				this.setState({ amigos: data, loading: false });
			});
	}

	static renderAmigosTable(amigos) {
		return (
			<table className='table'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Telefono</th>
						<th>Ciudad</th>
						<th>Departamento</th>
					</tr>
				</thead>
				<tbody>
					{amigos.map(amigo =>
						<tr key={amigo.amigoId}>
							<td>{amigo.nombre}</td>
							<td>{amigo.apellido}</td>
							<td>{amigo.telefono}</td>
							<td>{amigo.nombreCiudad}</td>
							<td>{amigo.nombreDepartamento}</td>
						</tr>
					)}
				</tbody>
			</table>
		);
	}

	render() {
		let contents = this.state.loading
			? <p><em>Loading...</em></p>
			: Home.renderAmigosTable(this.state.amigos);

		return (
			<div>
				<h1>Lista de Amigos</h1>
				<p>Componente que lista los amigos.</p>
				{contents}
			</div>
		);
	}
}
