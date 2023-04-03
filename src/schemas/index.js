import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    yourName: yup.string().min(2, "Too Short!").max(50, "Too Long!").matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
    budget: yup.string().required("Required"),
    FAQ: yup.bool().oneOf([true], "You must accept the terms and conditions"),
    yourMessage: yup.string().max(120)
})