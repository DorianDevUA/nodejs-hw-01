import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const fakeContact = createFakeContact();

  // console.log(`Новий контакт: ${fakeContact.name}`);
  contacts.push(fakeContact);
  writeContacts(contacts);
};

addOneContact();
