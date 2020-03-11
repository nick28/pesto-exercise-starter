function telephoneCheck(phonenumber) {
  const validUSPhoneNumberRegex = /(^1|^1\s|^)(\(\d{3}\)|\d{3})(-|\s|)\d{3}(-|\s|)\d{4}/;
  return validUSPhoneNumberRegex.test(phonenumber);
}

export { telephoneCheck };
