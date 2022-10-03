import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(5).max(12).required(),
});

const Input = styled(Field)`
  background-color: red;
  font-size: 20px;
  width: 200px;
`;

const initialValues = {
  login: '',
  password: '',
};
export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(`values`, values);
    console.log(`actions`, actions);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login <Input type="text" name="login"></Input>
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password <Input type="password" name="password"></Input>
          <ErrorMessage name="password" component="div" />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

// export const LoginForm = () => {
//   const handleSubmit = event => {
//     event.preventDefault();
//     // console.log(event.target.elements.login.value);
//     // console.log(event.target.elements.password.value);
//     const { login, password } = event.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login <input type="text" name="login"></input>
//       </label>
//       <label htmlFor="password">
//         Password <input type="text" name="password"></input>
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };
