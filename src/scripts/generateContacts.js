import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();
  const fakeContacts = [];

  for (let i = 0; i < number; i += 1) {
    fakeContacts.push(createFakeContact());
  }

  await writeContacts(contacts.concat(fakeContacts));

  return fakeContacts;
};

generateContacts(5);
