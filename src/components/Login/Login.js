import { useEffect } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import RegisterHeader from '../RegisterHeader/RegisterHeader';

function Login({
  loadingErrorMessage,
  setLoadingErrorMessage,
  setLoadingError,
  isLoadingError,
  formValues,
  setFormValues,
  login,
  isDataLoading,
}) {
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
      <RegisterHeader title={'Рады видеть!'} />
      <AuthForm
        handleChange={handleChange}
        formValues={formValues}
        buttonText={'Войти'}
        buttonAriaLabel={'авторизации'}
        authText={'Ещё не зарегистрированы? '}
        linkText={'Регистрация'}
        linkTo={'/signup'}
        login={login}
        loadingErrorMessage={loadingErrorMessage}
        isLoadingError={isLoadingError}
        isDataLoading={isDataLoading}
      />
    </>
  );
}

export default Login;
