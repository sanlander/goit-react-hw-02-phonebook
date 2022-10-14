import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.modules';
import { firstLetterToUppercase } from 'components';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(5),
      name: firstLetterToUppercase(this.state.name),
      number: this.state.number,
    };

    const { onSubmitForm } = this.props;
    onSubmitForm(newContact);

    this.resetForm();
  };

  handleContact = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Label>
          Enter your name
          <br />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleContact}
          />
        </Label>
        <br />
        <Label>
          Enter your number
          <br />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleContact}
          />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
