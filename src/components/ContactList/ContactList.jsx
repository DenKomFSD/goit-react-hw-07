import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.container}>
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
