import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface IFooterProps {
  question: string;
  linkHref: string;
  linkText: string;
}

const Footer = ({ question, linkHref, linkText }: IFooterProps) => {
  return (
    <div className="box">
      <span className="text-l">
        {question + " "}
        <Link className="link" to={linkHref}>
          {linkText}
        </Link>
      </span>
    </div>
  );
};

interface IProps {
  title: string;
  children: ReactNode;
  question: string;
  linkHref: string;
  linkText: string;
}

export const Auth = ({
  title,
  children: form,
  question,
  linkHref,
  linkText,
}: IProps) => {
  return (
    <div className="auth">
      <h1 className="h1">{title}</h1>
      {form}
      <Footer question={question} linkHref={linkHref} linkText={linkText} />
    </div>
  );
};
