const withTwoDigits = num =>
  num < 10 ? `0${num}` : `${num}`

export const formatDateForURL = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
