import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup, Glyphicon, Col, Button } from 'react-bootstrap';

export class AddAmigo extends Component {
  displayName = AddAmigo.name

  constructor(props) {
    super(props);
    this.state = {
      departamentos: [],
      ciudades: [],
      ciudadesByDpto: [],
      loading: true,
      nombre: "",
      apellido: "",
      telefono: "",
      departamento: 0,
      ciudad: 0
    };

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
    this.setState({ departamento: event.target.value });
    this.UpdateCiudadesByDepto(event.target.value);
  }

  UpdateCiudadesByDepto = departamentoId => {
    const result = this.state.ciudades.filter(city => city.departamentoId === Number.parseInt(departamentoId));
    this.setState({ ciudadesByDpto: result });
    console.log(this.state.ciudadesByDpto);
  }

  handleChangeCiudad = event => {
    this.setState({ ciudad: event.target.value });
  }
  handleChangeNombre = event => {
    this.setState({ nombre: event.target.value });
  }
  handleChangeApellido = event => {
    this.setState({ apellido: event.target.value });
  }
  handleChangeTelefono = event => {
    this.setState({ telefono: event.target.value });
  }


  handleSubmit = event => {
    const amigo = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      telefono: this.state.telefono,
      departamento: this.state.departamento,
      ciudad: this.state.ciudad
    };

    event.preventDefault();

    fetch('api/Amigos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(amigo)
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form" style={{ width: "60%", marginTop: "30px" }}>
        <h3>Agregar Amigo</h3>
        <FormGroup>
          <ControlLabel>Nombre</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="user" />
            </InputGroup.Addon>
            <FormControl type="text" onChange={this.handleChangeNombre} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Apellido</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="user" />
            </InputGroup.Addon>
            <FormControl type="text" onChange={this.handleChangeApellido} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Tel&eacute;fono</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="phone" />
            </InputGroup.Addon>
            <FormControl type="text" onChange={this.handleChangeTelefono} />
          </InputGroup>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Departamentos</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeDepto}>
            <option key="0" value="0">&nbsp;</option>
            {this.state.departamentos.map(dpto =>
              <option key={dpto.departamentoId} value={dpto.departamentoId}>{dpto.nombre}</option>
            )};
        </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Ciudades</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeCiudad}>
            {this.state.ciudadesByDpto.map(city =>
              <option key={city.municipioId} value={city.municipioId}>{city.nombre.toUpperCase()}</option>
            )};
        </FormControl>
        </FormGroup>
        <FormGroup>
          <Col smOffset={0} sm={10}>
            <Button type="submit" bsStyle="primary">Guradar</Button>
          </Col>
        </FormGroup>
      </form>
    );
  }
}
