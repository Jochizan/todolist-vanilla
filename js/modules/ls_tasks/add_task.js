import { ls, date } from '../global/global.js';

const addTask = (text, id) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (ls.getItem('tasks') === null) {
    ls.setItem(
      'tasks',
      JSON.stringify([
        {
          id: id,
          text: text,
          finish: false,
          date: {
            hour: new Date().toLocaleTimeString(),
            fullYear: `${day}-0${month}-${year}`
          }
        }
      ])
    );
  } else {
    const values = JSON.parse(ls.getItem('tasks'));
    values.push({
      id: id,
      text: text,
      finish: false,
      date: {
        hour: new Date().toLocaleTimeString(),
        fullYear: `${day}-0${month}-${year}`
      }
    });
    ls.setItem('tasks', JSON.stringify(values));
  }
};

export default addTask;
