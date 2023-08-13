import { Auth } from "../components/Auth/Auth";
import { SignUpForm } from "../components/Auth/SignUpForm.tsx";

export const SignUp = () => {
  return (
    <Auth
      title="Регистрация"
      question="Уже есть аккаунт?"
      linkHref="/sign_in"
      linkText="Войти"
    >
      <SignUpForm />
    </Auth>
  );
};
