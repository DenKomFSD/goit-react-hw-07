import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <div className="contacts">
        <ContactForm />
        <SearchBox />
      </div>

      <ContactList />
    </>
  );
}

export default App;
