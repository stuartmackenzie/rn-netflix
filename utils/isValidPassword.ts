const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const isValidPassword = (val: string): boolean => {
  const ret = val ? val.match(PASSWORD_REGEX) : false;
  if (!ret) return false;
  return typeof ret !== "boolean" ? ret.length > 0 : ret;
};

export default isValidPassword;
