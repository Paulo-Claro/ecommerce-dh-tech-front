export const cardNumberMask = (value) => {
    return value
    ?.replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
  };

  export const dateExpMask = (value) => {
    return value
    ?.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
  };