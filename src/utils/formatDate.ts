const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(date) // TODO

export default formatDate;
