import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorBox,
  Form,
  FormFooter,
  Label,
  LabelContent,
  LabelText,
} from "./elements";
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
              {formikProps.errors.username && formikProps.touched.username && (
                <ErrorBox>
                  <FormattedMessage id={formikProps.errors.username} />
                </ErrorBox>
              )}
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
