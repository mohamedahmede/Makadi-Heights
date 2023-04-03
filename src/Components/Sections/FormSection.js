import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../../schemas/index";
import FormImg from "../../images/FormImg.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

import "./FormSection.scss";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  console.log("submitted");
};

const FormSection = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      yourName: "",
      email: "",
      phone: "",
      budget: "",
      yourMessage: "",
      FAQ: false,
    },
    validationSchema: formSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <Container fluid className="formSectionContainer">
        <Row className="w-100">
          <Col md={4}>
            <img src={FormImg} className="w-100" alt="A Happy Girl" />
          </Col>
          <Col md={8}>
            <form onSubmit={handleSubmit} className="contactForm">
              <p>
                Enter your details and our representative will get back to you
                shortly
              </p>
              <TextField
                id="yourName"
                className="inputField"
                name="yourName"
                type="text"
                label="Your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yourName}
                variant="standard"
                error={touched.yourName && errors.yourName}
                InputLabelProps={{
                  className: "inputFieldLabel",
                }}
              />

              {errors.yourName && touched.yourName && (
                <p className="errorMessage">{errors.yourName}</p>
              )}

              <TextField
                id="email"
                className="inputField"
                name="email"
                type="email"
                label="Email ID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="standard"
                error={touched.email && errors.email}
                InputLabelProps={{
                  className: "inputFieldLabel",
                }}
              />

              {errors.email && touched.email && (
                <p className="errorMessage">{errors.email}</p>
              )}

              <TextField
                id="phone"
                className="inputField"
                name="phone"
                type="text"
                label="Phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                variant="standard"
                error={touched.phone && errors.phone}
                InputLabelProps={{
                  className: "inputFieldLabel",
                }}
              />

              {errors.phone && touched.phone && (
                <p className="errorMessage">{errors.phone}</p>
              )}

              <FormControl variant="standard" className="w-100">
                <InputLabel id="demo-simple-select-standard-label">
                  Choose your bugdet
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="budget"
                  name="budget"
                  className="inputField"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Choose your bugdet"
                  value={values.budget}
                  error={touched.budget && errors.budget}
                  InputLabelProps={{
                    className: "inputFieldLabel",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              {errors.budget && touched.budget && (
                <p className="errorMessage">{errors.budget}</p>
              )}

              <TextField
                id="yourName"
                className="inputField"
                name="yourMessage"
                type="text"
                label="Enter your message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yourMessage}
                variant="standard"
                error={touched.yourMessage && errors.yourMessage}
                InputLabelProps={{
                  className: "inputFieldLabel",
                }}
              />

              {errors.yourMessage && touched.yourMessage && (
                <p className="errorMessage">{errors.yourMessage}</p>
              )}

              <div className="FAQ">
                <label >
                  <input
                    name="FAQ"
                    type="checkbox"
                    onChange={handleChange}
                    value="true"
                  />
                  I agree to the processing of personal data
                </label>
              </div>

              <div>
                <button
                  className="formSubmitButton"
                  disabled={isSubmitting}
                  type="submit"
                >
                  LEAVE A CALL REQUEST
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormSection;
