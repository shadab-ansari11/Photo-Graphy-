import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';

export interface IOtp {
  otp: string;
}

export const defaultOtpValues: IOtp = {
  otp: '',
};

const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required('Please enter OTP')
    .matches(/^[0-9]{4}$/, 'OTP must be 4 digits'),
});

export const useOtpForm = (
  onSubmit: (
    values: IOtp,
    formikHelpers: FormikHelpers<IOtp>,
  ) => void | Promise<unknown>,
  initialValues: IOtp = defaultOtpValues,
) => {
  return useFormik<IOtp>({
    initialValues,
    validationSchema: otpSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
