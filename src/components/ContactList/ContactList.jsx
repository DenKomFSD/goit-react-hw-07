import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts =
    contacts?.filter(
      (contact) =>
        contact.name !== undefined &&
        contact.name.toLowerCase().includes(filter ? filter.toLowerCase() : "")
    ) || [];

  return (
    <>
      {filteredContacts.length > 0 && (
        <ul className={css.container}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
