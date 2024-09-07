import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  writeContacts([]);

  // ----------- Для виводу у консоль -----------
  // console.log('Всі контакти видалено!');
  // --------------------------------------------
};

removeAllContacts();
