import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Required"),

    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .required("Required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.labelfield} htmlFor="user_name">
            Name
          </label>
          <Field
            className={css.inputfield}
            type="text"
            name="name"
            id="user_name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.field}>
          <label className={css.labelfield} htmlFor="phoneId">
            Phone
          </label>
          <Field
            className={css.inputfield}
            type="text"
            name="number"
            id="phoneId"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
