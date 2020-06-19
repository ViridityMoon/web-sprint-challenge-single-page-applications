import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(6, "Name must be at least 2 characters long.")
    .required("Name is Required"),
})

export default formSchema
