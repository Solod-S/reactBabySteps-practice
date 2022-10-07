import { Formik, Form, Field } from 'formik';
import React from 'react';
import styled from 'styled-components';

const FormCastum = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const AddMaterialBtn = styled.button`
  width: 200px;
`;

export const CreateMaterialForm = ({ onSubmit }) => {
  const handleSumit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={handleSumit}
      // вместо V
      // onSubmit={(values, actions) => {
      //   console.log(values);
      //   actions.resetForm();
      // }}
    >
      {props => {
        const { isSubmitting } = props;
        // console.log(props);
        return (
          <FormCastum>
            <label>
              Описание
              <Field name="title" type="text" />
            </label>
            <label>
              Ссылка
              <Field
                name="link"
                // type="url"
                type="text"
                placeholder="https://example.com"
              ></Field>
            </label>
            <AddMaterialBtn disabled={isSubmitting} type="submit">
              Добавить материал
            </AddMaterialBtn>
          </FormCastum>
        );
      }}
    </Formik>
  );
};
