import * as yup from "yup";

const enum ValidationMessage {
  REQUIRED = "必填",
  EMAIL_FORMAT_ERROR = "電子郵件格式不符",
  PHONE_FORMAT_ERROR = "手機號碼格式不符"
}

// 手機號碼的比對
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required(ValidationMessage.REQUIRED),
  lastName: yup.string().required(ValidationMessage.REQUIRED),
  email: yup.string().email(ValidationMessage.EMAIL_FORMAT_ERROR).required(ValidationMessage.REQUIRED),
  contact: yup
    .string()
    .matches(phoneRegExp, ValidationMessage.PHONE_FORMAT_ERROR)
    .required(ValidationMessage.REQUIRED),
  address1: yup.string().required(ValidationMessage.REQUIRED),
  address2: yup.string().required(ValidationMessage.REQUIRED),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export { checkoutSchema, initialValues }