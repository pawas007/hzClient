import { FormikErrors, FormikTouched } from "formik";

export interface FormFieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[]; // Додано можливі типи
}

export interface InviteFormValuesUser {
  email: string;
}
