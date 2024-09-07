import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  const deletedContact = contacts.pop();
  writeContacts(contacts);

  return deletedContact;
};

console.log(await removeLastContact());
