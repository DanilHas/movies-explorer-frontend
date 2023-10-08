import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import RegisterHeader from '../RegisterHeader/RegisterHeader';

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <RegisterHeader title={'Рады видеть!'} />
      <AuthForm
        handleChange={handleChange}
        formValues={formValues}
        buttonText={'Войти'}
        buttonAriaLabel={'авторизации'}
        authText={'Ещё не зарегистрированы? '}
        linkText={'Регистрация'}
        linkTo={'/signup'}
      />
    </>
  );
}

export default Login;
