import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  LoginFormComponent,
  Title,
} from "./styles";
import Button from "../Button/Button";

function LoginForm() {
  //   Валидационная схема
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .min(10, "Min 10 symbols")
      .max(30, "Max 30 symbols"),
    password: Yup.string()
      .required("Field password is required")
      .min(8, "Min 8 symbols"),
    age: Yup.number().typeError("Type number").min(18, "Min age 18"),
    agree: Yup.boolean().oneOf([true], "You should agree"),
  });

  // Настройка формы через formik
  // В вызов useFormik передаём объект настройки
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      age: "",
      agree: false,
    },
    validationSchema: schema,
    validateOnChange: false,
    //  onSubmit - содержит функцию, которую нужно вызвать при
    // событии submit
    onSubmit: (values) => {
      console.log(values);
    },
  });

    // console.log(formik)

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login Form</Title>
      <Input
        name="email"
        label="Email*"
        placeholder="Enter your email"
        id="email_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="password"
        label="Password*"
        placeholder="Enter your password"
        id="password_id"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name="age"
        label="Age"
        type="number"
        placeholder="Enter your age"
        id="age_id"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <CheckboxContainer>
        <Checkbox
          name="agree"
          type="checkbox"
          id="agree_id"
          checked={formik.values.agree}
          onChange={formik.handleChange}
        />
        <CheckboxLabel>I agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name="LOGIN" type="submit" />
    </LoginFormComponent>
  );
}

export default LoginForm;
