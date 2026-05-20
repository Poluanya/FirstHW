import { test, expect } from '../fixtures';
import { createRandomUser } from '../factories/userFactory';
import { getFormattedDate } from '../utils/dateHelper';

test('Хелперы', async () => {
  const newUser = createRandomUser();
  const todayDate = getFormattedDate();

  console.log('*сгенерированный пользователь*');
  console.log(newUser);
  console.log('*текущая дата*');
  console.log(todayDate);
});
