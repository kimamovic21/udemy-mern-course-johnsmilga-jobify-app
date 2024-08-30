import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

export const action = async ({ request }) => {
  // console.log('Request: ', request);
  const formData = await request.formData();
  // console.log('formData: ', formData);
  const data = Object.fromEntries(formData);
  console.log('data: ', data);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  };
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='Kerim'/>
        <FormRow type='text' name='lastName' defaultValue='Imamovic' labelText='last name' />
        <FormRow type='text' name='location' defaultValue='Sarajevo'/>
        <FormRow type='email' name='email' defaultValue='kerim@email.com'/>

        <FormRow type='password' name='password' defaultValue='12345678'/>

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;