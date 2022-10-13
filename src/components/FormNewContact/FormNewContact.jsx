import { Form, Label, Input, Button } from './FormNewContact.modules';

export const FormNewContact = ({
  onSubmit,
  valueName,
  valueNumber,
  onChange,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Enter your name
        <br />
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={valueName}
          onChange={onChange}
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
          value={valueNumber}
          onChange={onChange}
        />
      </Label>
      <br />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
