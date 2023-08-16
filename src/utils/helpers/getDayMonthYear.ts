export const getDayMonthYear = (dateOrSeconds: number | Date) => {
  const date = dateOrSeconds instanceof Date
    ? dateOrSeconds
    : new Date(dateOrSeconds);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let monthName: string = 'янв';
  if (month === 2) monthName = 'фев';
  if (month === 3) monthName = 'март';
  if (month === 4) monthName = 'апр';
  if (month === 5) monthName = 'май';
  if (month === 6) monthName = 'июн';
  if (month === 7) monthName = 'июл';
  if (month === 8) monthName = 'авг';
  if (month === 9) monthName = 'сент';
  if (month === 10) monthName = 'окт';
  if (month === 11) monthName = 'нояб';
  if (month === 12) monthName = 'дек';

  const dateString = `${day} ${monthName} ${year}`;

  return {
    day,
    month,
    year,
    monthName,
    dateString,
  };
};
