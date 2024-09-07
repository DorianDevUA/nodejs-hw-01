import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();

  // ----------- Для виводу у консоль -----------
  // console.log(
  //   contacts.length
  //     ? `К-сть контактів: ${contacts.length}`
  //     : `Контакти відсутні`,
  // );
  //---------------------------------------------

  return contacts.length;
};

console.log(await countContacts());
