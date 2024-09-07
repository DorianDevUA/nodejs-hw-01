import path from 'node:path';

// отримуємо шлях до кореневої директорії викликом метода process.cwd()
const pathToWorkDir = path.join(process.cwd());
// розширюємо шлях додатковими елементами
const pathToFile = path.join(pathToWorkDir, 'src', 'db', 'db.json');

export const PATH_DB = pathToFile;
