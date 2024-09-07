import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  // ----------- Для виводу у консоль -----------
  // for (let i = 0; i < number; i += 1) {
  //   const fakeContact = createFakeContact();
  //   contacts.push(fakeContact);
  //   console.log(`Новий контакт: ${fakeContact.name}`);
  // }
  // --------------------------------------------

  for (let i = 0; i < number; i += 1) {
    contacts.push(createFakeContact());
  }

  writeContacts(contacts);
};

generateContacts(2);
