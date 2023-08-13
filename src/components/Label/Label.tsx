import "./style.scss";

interface IProps {
  className?: string;
  htmlFor: string;
  value: string;
  description?: string;
}

export const Label = ({ className, htmlFor, value, description }: IProps) => {
  return (
    <label className={"label h2 " + className} htmlFor={htmlFor}>
      {value}
      {description ? <span className="text-m">{description}</span> : null}
    </label>
  );
};
