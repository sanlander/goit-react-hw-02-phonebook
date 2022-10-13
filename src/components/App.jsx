import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'Box';
import { ContactsList, FormNewContact } from '../components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleContact = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState({
      contacts: [newContact, ...this.state.contacts],
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const contactsTotal = this.state.contacts.length;
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box as="section" p="24px">
        <h1>Phonebook</h1>
        <FormNewContact
          onSubmit={this.handleFormSubmit}
          valueName={this.state.name}
          valueNumber={this.state.number}
          onChange={this.handleContact}
        />
        <h2>Contacts</h2>
        {contactsTotal > 0 ? (
          <ContactsList names={visibleContacts} onChange={this.handleContact} />
        ) : (
          ''
        )}
      </Box>
    );
  }
}
