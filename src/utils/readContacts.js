import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  } catch (error) {
    console.error(`Помилка читання файлу: ${error.message}`);
    throw error;
  }
};
