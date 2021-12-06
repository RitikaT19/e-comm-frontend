export const isNameValid = (name: string) => {
  return /^[A-Za-z ]+$/.test(name);
};

export const isEmailValid = (email: string) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    email
  );
};

export const isQuantityValid = (quantity: string) => {
  return /^([0-9]{1,})$/.test(quantity);
};
export const isPriceValid = (quantity: string) => {
  return /^([0-9]{1,})$/.test(quantity);
};
export const isPasswordValid = (password: string) => {
  return password.length >= 4;
};

export const isCategoryValid = (name: string) => {
  return /^[A-Za-z0-9 ]+$/.test(name);
};

export const isProductValid = (name: string) => {
  return /^[A-Za-z0-9 ]+$/.test(name);
};
