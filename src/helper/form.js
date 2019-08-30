import * as Yup from "yup"

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  location: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  subject: Yup.string().required("Required"),
})

export const options = [
  { value: "info", label: "General Info" },
  { value: "workshop", label: "Workshop" },
  { value: "personal-training", label: "Personal Training" },
  { value: "nutrition", label: "Nutrition" },
]

export const initialValues = {
  email: "",
  name: "",
  location: "",
  phone: "",
  subject: "info",
  message: "",
}
