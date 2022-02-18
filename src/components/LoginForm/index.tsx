import { Heading, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { PATHS } from "../../constants";
import useAuth from "../../context/auth";
import { colors } from "../../resources/colors";
import { fonts } from "../../resources/fonts";
import { MemoizedButton } from "../Button";
import { MemoizedInput } from "../Input";

type LoginFormik = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const context = useAuth();
  const formik = useFormik<LoginFormik>({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Email não é válido")
        .required("E-mail é obrigatório"),
      password: yup
        .string()
        .min(8, "Sua senha deve possuir no mínimo 8 caracteres")
        .required("Password é obrigatório"),
    }),

    onSubmit: (values, actions) => {
      if (values) {
        try {
          context.Login(values);
          actions.resetForm();
        } catch (err) {
          formik.setFieldError("email", String(err));
        }
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <Stack>
        <Title>
          Bem vindo! <br /> Entre no maravilhoso mundo do Blueteco
        </Title>
        <MemoizedInput
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          errorMessage={formik.errors.email}
          haveError={!!formik.errors.email}
          onChange={formik.handleChange("email")}
          value={formik.values.email}
          isInvalid={!!formik.touched.email && !!formik.errors.email}
          label="E-mail"
        />
        <MemoizedInput
          type="password"
          id="password"
          placeholder="Digite sua senha"
          errorMessage={formik.errors.password || ""}
          haveError={!!formik.errors.password}
          onChange={formik.handleChange("password")}
          value={formik.values.password}
          isInvalid={!!formik.touched.password && !!formik.errors.password}
          label="Password"
        />
        <Redirect to={PATHS.CREATE}>Não tenho uma conta 😞</Redirect>
        <MemoizedButton
          type="submit"
          variant="solid"
          disabled={!!formik.errors.email || !!formik.errors.password}
        >
          Entrar!
        </MemoizedButton>
      </Stack>
    </form>
  );
};

const Title = styled(Heading)`
  text-align: center;
  color: ${colors.secondary};
  font-family: ${fonts.londrina};
  font-weight: 400;
`;

const Redirect = styled(Link)`
  text-align: center;
  margin: 2rem 0 !important;
  color: ${colors.mainLighter};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.mainLight};
  }
`;

export default LoginForm;
