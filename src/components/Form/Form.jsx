import { useState } from 'react';
import css from './Form.module.css';
import {
  useAddContactMutation,
  useGetContactsApiQuery,
} from 'redux/contactsApi';

function Form() {
const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsApiQuery();

  const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };

  const handleAddContact = async e => {
    e.preventDefault();
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      setName('');
      setPhone('');
      return alert(`Number: ${name} is already in phonebook`);
    }
    if (name && phone) {
      await addContact({ name: name, phone: phone }).unwrap();
      setName('');
      setPhone('');
    }
  };


    return (
      <form className={css.form} onSubmit = {handleAddContact}>
        <div className={css.wrapper} >
          <label className={css.label}>
            Name
          </label>
            <input
            className={css.input} 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
                />
            </div>
            <div className={css.wrapper} >
            <label htmlFor="numberInput" className={css.label}>
            Number
          </label>
            <input
            className={css.input} 
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={phone}
          />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        
      </form>
    );
  }


export default Form;