import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (data = []) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
    return data;
  } catch (error) {
    console.error(`Помилка запису у файл: ${error.message}`);
    throw error;
  }
};
