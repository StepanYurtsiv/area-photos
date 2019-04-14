const twoDigs = num =>
  num < 10 ? `0${num}` : `${num}`


export const formatDate = date =>
  `${twoDigs(date.getDate())}/${twoDigs(date.getMonth() + 1)}/${date.getFullYear()}`;

export const formatDateForURL = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

