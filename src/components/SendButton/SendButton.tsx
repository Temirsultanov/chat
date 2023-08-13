import "./style.scss";

interface IProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled: boolean;
}

export const SendButton = ({ className, type, disabled }: IProps) => {
  return (
    <button
      className={"sendButton " + className}
      type={type}
      disabled={disabled}
    >
      <Icon />
    </button>
  );
};

const Icon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 14L23.2284 18.4815C24.1596 19.2797 24.1596 20.7203 23.2284 21.5185L18 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
