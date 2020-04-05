import React, { Component } from 'react';
import './AddNewPlace.css';
import { Form, Popup, Button } from 'semantic-ui-react';
import { addAttraction } from '../../services';



const options = [
  { key: 'Gda', text: 'Gdańsk', value: 'Gdańsk' },
  { key: 'Sop', text: 'Sopot', value: 'Sopot' },
  { key: 'Gdy', text: 'Gdynia', value: 'Gdynia' },
];

const type = [
  { key: 'Res', text: 'Restauracja', value: 'restauracja' },
  { key: 'Nat', text: 'Natura', value: 'natura' },
  { key: 'Spo', text: 'Sport', value: 'sport' },
  { key: 'Kul', text: 'Kultura', value: 'kultura' },
];

class FormAddPlace extends Component {
  state = {
    name: "",
    favorite: false,
    priceRange: "",
    type: "",
    img: "",
    location: "",
    descriptionShort: "",
    descriptionLong: "",
    terms: false,
  };

  handleTextChange = (e, { value, name }) => this.setState({ [name]: value });
  handleCheckboxChange = (e, { checked, name }) => this.setState({ [name]: checked });

  addToData = () =>
    addAttraction(this.state);

  handleSubmit = () => {
    this.addToData();
  };

  render() {
    const button = this.state.terms ?
      <Form.Button type='submit' >Dodaj atrakcję</Form.Button> :
      <Popup content='Zaznacz wymagane zgody' trigger={<Button>Dodaj atrakcję</Button>} />

    return (
      <main className='addNewPlace__dashboard'>
        <h1 className='addNewPlace__dashboard--h1'>Dodaj swoją atrakcję</h1>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input required input={this.state.name} name='name' onChange={this.handleTextChange} label='Nazwa atrakcji' placeholder='Nazwa atrakcji' />
            <Form.Input required input={this.state.img} name='img' onChange={this.handleTextChange} label='Zdjęcie' placeholder='Zdjęcie' />
            <Form.Select
              required
              input={this.state.location} onChange={this.handleTextChange}
              name='location'
              label='Lokalizacja'
              options={options}
              placeholder='Wybierz lokalizację'
            />
            <Form.Select
              required
              input={this.state.type}
              onChange={this.handleTextChange}
              name="type"
              label='Kategoria'
              options={type}
              placeholder='Wybierz kategorię'
            />
          </Form.Group>
          <Form.Group inline>
            <label>Cena:</label>
            <Form.Radio
              label='Darmowe'
              name='priceRange'
              value='darmowe'
              checked={this.state.priceRange === 'darmowe'}
              onChange={this.handleTextChange}
            />
            <Form.Radio
              label='Tanio ($)'
              name='priceRange'
              value='tanio'
              checked={this.state.priceRange === 'tanio'}
              onChange={this.handleTextChange}
            />
            <Form.Radio
              label='Umiarkowanie ($$)'
              name='priceRange'
              value='umiarkowanie'
              checked={this.state.priceRange === 'umiarkowanie'}
              onChange={this.handleTextChange}
            />
            <Form.Radio
              label='Drogo ($$$)'
              name='priceRange'
              value='drogo'
              checked={this.state.priceRange === 'drogo'}
              onChange={this.handleTextChange}
            />
          </Form.Group>
          <Form.TextArea required input={this.state.descriptionLong} onChange={this.handleTextChange} name="descriptionLong" label='Opis' placeholder='Opisz atrakcję' />
          <Form.Checkbox required label='Zgadzam się z warunkami korzystania z usługi' name='terms' checked={this.state.terms} onChange={this.handleCheckboxChange} />
          {button}
        </Form>
      </main>
    )
  }
}

export default FormAddPlace;
