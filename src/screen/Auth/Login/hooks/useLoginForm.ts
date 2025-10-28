import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';

export interface ILogin {
  phoneNo: string;
}

export const defaultValues: ILogin = {
  phoneNo: '',
};

const schema = Yup.object().shape({
  phoneNo: Yup.string()
    .required('Please enter mobile number')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
});

export const useLoginForm = (
  onSubmit: (
    values: ILogin,
    formikHelpers: FormikHelpers<ILogin>,
  ) => void | Promise<unknown>,
  initialValues: ILogin = defaultValues,
) => {
  return useFormik<ILogin>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
