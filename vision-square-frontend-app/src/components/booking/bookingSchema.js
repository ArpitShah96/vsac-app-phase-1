import * as yup from "yup";
const bookingSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Mobile is required"),
  service: yup.string().required("Service selection is required"),
  slot: yup.string().required("Please choose a time slot"),
});
export default bookingSchema;