import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  // ----------- Для виводу у консоль -----------
  // const contacts = await readContacts();

  // console.log(
  //   contacts.length
  //     ? `К-сть контактів: ${contacts.length}`
  //     : `Контакти відсутні`,
  // );

  // for (let i = 0; i < contacts.length; i += 1) {
  //   console.log(`${i + 1}: ${contacts[i].name}`);
  // }

  // return contacts;
  //--------------------------------------------

  return await readContacts();
};

console.log(await getAllContacts());
