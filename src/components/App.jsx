import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
      return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#070303',
        }}
      >
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>

       
        <ContactsList/>
        
      </div>
    );
};

export default App;



  
  