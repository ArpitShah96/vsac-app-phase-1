import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(
      /^(\+?\d{1,3}[-\s]?)?(\(?\d{2,3}\)?[-\s]?)?\d{7,15}$/,
      "Mobile number is invalid"
    ) // This regex allows optional country code and formats
    .required("Mobile number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default contactSchema;
