import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
 <ul>
    {contacts.map(({id, name, number}) => (
         <li key={id} className={css.item}>
            <p>{name}: {number}</p>
            <button  className={css.button} type="button" onClick={() => onDeleteContact(id)}>DELETE</button>
        </li>
    ))}
</ul>)
}

ContactsList.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

export default ContactsList