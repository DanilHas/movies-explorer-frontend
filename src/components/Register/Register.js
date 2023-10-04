import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import RegisterHeader from '../RegisterHeader/RegisterHeader';

function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
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
      <RegisterHeader title={'Добро пожаловать!'} />
      <AuthForm
        handleChange={handleChange}
        formValues={formValues}
        buttonText={'Зарегистрироваться'}
        buttonAriaLabel={'регистрации'}
        authText={'Уже зарегистрированы? '}
        linkText={'Войти'}
        linkTo={'/signin'}
      />
    </>
  );
}

export default Register;
