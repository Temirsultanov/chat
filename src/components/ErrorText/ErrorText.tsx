import "./style.scss";

interface IProps {
  show?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ErrorText = ({ show = true, children, className }: IProps) => {
  return (
    <p
      className={
        "errorText text-m " + (show ? "errorText-show " : "") + className
      }
    >
      {children}
    </p>
  );
};
