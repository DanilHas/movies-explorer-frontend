import { useEffect, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import RegisterHeader from '../RegisterHeader/RegisterHeader';

function Register({
  loadingErrorMessage,
  setLoadingErrorMessage,
  setLoadingError,
  isLoadingError,
  register,
  isDataLoading,
}) {
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

  useEffect(() => {
    setLoadingError(false);
    setLoadingErrorMessage('');
  }, []);

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
        register={register}
        loadingErrorMessage={loadingErrorMessage}
        isLoadingError={isLoadingError}
        isDataLoading={isDataLoading}
      />
    </>
  );
}

export default Register;
