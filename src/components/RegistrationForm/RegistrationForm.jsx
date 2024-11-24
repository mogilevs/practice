/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { useId } from "react";

import css from "./RegistrationForm.module.css"

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(12, "Too Long!")
        .required("Required"),
});

const notify = () => toast.error('Password incorrect');

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
    const passwordFieldId = useId();
    const repeatPasswordFieldId = useId();

  const handleSubmit = (values, actions) => {
    // if (values.password === values.repeatPassword) {
      dispatch(register(values));
      actions.resetForm();
    // } else {
    //   notify();
    // }   
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword:"",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>       
   <div className={css.box}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            autoComplete="off"
                      className={css.input}
                      placeholder="Enter your email"
          />
          <ErrorMessage className={css.errorText} name="email" component="p" />
  
   </div>
        <div className={css.box}>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
                      className={css.input}
                      placeholder= "Enter your password"
          />
          <ErrorMessage className={css.errorText} name="password" component="p" />
              </div>
              

        <div className={css.box}>
          <label htmlFor={repeatPasswordFieldId} className={css.label}>
            Repeat password
          </label>
          <Field
            type="password"
            name="repPassword"
            id={repeatPasswordFieldId}
                      className={css.input}
                      placeholder="Repeat password"
          />
          <ErrorMessage className={css.errorText} name="repPassword" component="p" />
              </div>

        <button type="submit" className={css.submitButton}>
          Sign up
              </button>
              <p>Already have account?<Link to="/login">Sign in</Link></p>
      </Form>
    </Formik>
  );
}
