import { Auth } from "../components/Auth/Auth";
import { SignInForm } from "../components/Auth/SignInForm";

export const SignIn = () => {
  return (
    <Auth
      title="Вход"
      question="Нет аккаунта?"
      linkHref="/sign_up"
      linkText="Зарегистрироваться"
    >
      <SignInForm />
    </Auth>
  );
};
