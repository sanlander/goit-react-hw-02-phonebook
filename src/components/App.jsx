import { Component } from 'react';
import { Box } from 'Box';
import { ContactsList, ContactForm, Filter } from '../components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = newContact => {
    const newName = newContact.name.toLocaleLowerCase();

    if (
      this.state.contacts.find(
        ({ name }) => newName === name.toLocaleLowerCase()
      )
    ) {
      Notify.warning(`${newContact.name} is already in contacts.`, {
        position: 'center-top',
      });
      return;
    }

    this.setState({
      contacts: [newContact, ...this.state.contacts],
    });
  };

  handleFilter = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleDelete = idItems => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idItems),
    }));
  };

  render() {
    const { contacts } = this.state;
    const contactsTotal = contacts.length;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box p="24px">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleFormSubmit} />
        <h2>Contacts</h2>
        {contactsTotal > 0 && (
          <>
            <Filter onChange={this.handleFilter} />
            <ContactsList
              contacts={visibleContacts}
              onClickDelete={this.handleDelete}
            />
          </>
        )}
      </Box>
    );
  }
}
