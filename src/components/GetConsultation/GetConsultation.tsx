import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import { GetConsultationWrapper, Message } from "./styles";

function GetConsultation() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Field email is required").email("Type email"),
    personalData: Yup.boolean().oneOf([true], "You should agree"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      personalData: false,
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      setShowMessage(true);
    },
  });

  return (
    <GetConsultationWrapper onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        label="Email*"
        placeholder="Enter your email"
        id="email_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Checkbox
        name="personalData"
        checked={formik.values.personalData}
        onChange={formik.handleChange}
        id="personalData_id"
        label="I agree"
      />
      <Button
        name="Get Consultation"
        type="submit"
        disabled={!formik.values.personalData}
      />
      {showMessage && <Message>Мы с Вами скоро свяжемся</Message>}
    </GetConsultationWrapper>
  );
}

export default GetConsultation;
