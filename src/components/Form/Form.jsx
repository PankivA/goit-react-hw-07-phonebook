import { useState } from 'react';
import css from './Form.module.css';
import { addContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';

function Form ({onSubmit}) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getFilteredContacts);
   
    
    const handleChange = evt => {
      const { name, value } = evt.target;
      switch (name) {
        case 'name':
         setName(value);
         break;
    
        case 'number':
         setNumber(value);
         break;
    
        default:
         return;   
        }
    };

    const handleSubmit = event => {
      event.preventDefault();
  
      const isContactExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isContactExist) {
        alert(`User with name ${name} is already in contacts`);
        return;
      }
  
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    };

    return (
      <form className={css.form} onSubmit = {handleSubmit}>
        <div className={css.wrapper} >
          <label className={css.label} htmlFor="nameInput">
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
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        
      </form>
    );
  }


export default Form;