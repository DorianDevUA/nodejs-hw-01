import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  // ----------- Для виводу у консоль -----------
  // const deletedContact = contacts.pop();
  // console.log(
  //   contacts.length
  //     ? `Видалено контакт: ${deletedContact.name}`
  //     : `Контакти відсутні`,
  // );
  // writeContacts(contacts);
  // --------------------------------------------

  const deletedContact = contacts.pop();
  writeContacts(contacts);

  return deletedContact;
};

console.log(await removeLastContact());
