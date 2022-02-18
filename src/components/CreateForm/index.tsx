import { Heading, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { PATHS, ROLES } from "../../constants";
import useAuth from "../../context/auth";
import { createUser } from "../../infrastructure/api/functions";
import { colors } from "../../resources/colors";
import { fonts } from "../../resources/fonts";
import { Role } from "../../types/enums";
import { MemoizedButton } from "../Button";
import { MemoizedInput } from "../Input";

type CreateFormik = {
  name: string;
  email: string;
  birthDate: Date;
  password: string;
  passwordConfirmation: string;
  role: Role;
};

const CreateForm: React.FC = () => {
  const context = useAuth();
  const formik = useFormik<CreateFormik>({
    initialValues: {
      name: "",
      email: "",
      birthDate: new Date("01/01/1960"),
      password: "",
      passwordConfirmation: "",
      role: Role["OTHER"],
    },

    validationSchema: yup.object().shape({
      name: yup
        .string()
        .matches(
          /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
          "Nome deve possuir apenas letras"
        )
        .min(5, "Nome deve possuir pelo menos 5 letras")
        .max(25, "Nome deve possuir no máximo 25 letras")
        .required("Nome é obrigatório"),
      email: yup
        .string()
        .email("Email não é válido")
        .required("E-mail é obrigatório"),
      birthDate: yup
        .date()
        .max(new Date("02/17/2004"), "Você deve ser maior de 18 anos"),
      password: yup
        .string()
        .min(8, "Sua senha deve possuir no mínimo 8 caracteres")
        .required("Password é obrigatório"),
      confirmPassword: yup
        .string()
        .min(8, "Sua senha deve possuir no mínimo 8 caracteres")
        .oneOf([yup.ref("password"), null], "Passwords devem ser iguais")
        .required("Password é obrigatório"),
      role: yup.mixed().required("Cargo é obrigatório"),
    }),

    onSubmit: (values, actions) => {
      if (values)
        createUser({
          ...values,
          birthDate: values.birthDate.toDateString(),
        })
          .then((response) => {
            context.Login({
              email: response.data.user.email,
              password: values.password,
            });
            actions.resetForm();
          })
          .catch((err) => {
            formik.setFieldError("name", err.message);
          });
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
          Bem vindo! <br /> Crie sua conta e junte-se a nós
        </Title>
        <MemoizedInput
          type="text"
          id="name"
          placeholder="Digite seu nome"
          errorMessage={formik.errors.name}
          haveError={!!formik.errors.name}
          onChange={formik.handleChange("name")}
          value={formik.values.name}
          isInvalid={!!formik.touched.name && !!formik.errors.name}
          label="Nome"
        />
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
          type="date"
          id="birthDate"
          placeholder="Seu nascimento"
          errorMessage={"Data inválida!"}
          haveError={!!formik.errors.birthDate}
          onChange={formik.handleChange("birthDate")}
          value={formik.values.birthDate.toDateString()}
          isInvalid={!!formik.touched.birthDate && !!formik.errors.birthDate}
          label="Data de nascimento"
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
        <MemoizedInput
          type="password"
          id="passwordConfirmation"
          placeholder="Digite novamente sua senha"
          errorMessage={formik.errors.passwordConfirmation}
          haveError={!!formik.errors.passwordConfirmation}
          onChange={formik.handleChange("passwordConfirmation")}
          value={formik.values.passwordConfirmation}
          isInvalid={
            !!formik.touched.passwordConfirmation &&
            !!formik.errors.passwordConfirmation
          }
          label="Confirme a senha"
        />
        <MemoizedInput
          isSelect={true}
          options={ROLES}
          id="role"
          placeholder="Escolha seu cargo"
          errorMessage={formik.errors.role}
          haveError={!!formik.errors.role}
          onChange={formik.handleChange("role")}
          value={formik.values.role}
          isInvalid={!!formik.touched.role && !!formik.errors.role}
          label="Cargo"
        />

        <Redirect to={PATHS.LOGIN}>Já tenho uma conta 😎</Redirect>
        <MemoizedButton
          type="submit"
          variant="solid"
          disabled={!!formik.errors}
        >
          Criar conta!
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

export default CreateForm;
