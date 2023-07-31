import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";

TodoForm.propTypes = {
  onsubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      title: yup.string().required("Please enter title"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log("TODO FORM: ", values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="title" lable="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
