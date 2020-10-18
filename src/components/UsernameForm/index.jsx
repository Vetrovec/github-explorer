import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { ErrorMessage as FormikErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { Form, FormFooter, Label, LabelContent, LabelText } from "./elements";
import ErrorMessage from "components/ErrorMessage";
import { Button, TextInput } from "components/Inputs";

function UsernameForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(39, "containers.profile.validation.maxlength")
          .matches(
            /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
            "containers.profile.validation.characters"
          )
          .required("containers.profile.validation.required"),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formikProps) => (
        <Form
          onReset={formikProps.handleReset}
          onSubmit={formikProps.handleSubmit}
        >
          <Label>
            <LabelContent>
              <LabelText>
                <FormattedMessage id="components.usernameform.inputs.username" />
              </LabelText>
              <FormikErrorMessage name="username" component={ErrorMessage} />
            </LabelContent>
            <Field id="username" name="username" as={TextInput} />
          </Label>
          <FormFooter>
            <Button type="submit">
              <FormattedMessage id="components.usernameform.inputs.open" />
            </Button>
          </FormFooter>
        </Form>
      )}
    </Formik>
  );
}

UsernameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UsernameForm;
