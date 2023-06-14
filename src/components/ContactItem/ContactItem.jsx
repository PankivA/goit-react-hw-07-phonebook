import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <li id={id} className={css.item}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.btn}
        type="submit"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;