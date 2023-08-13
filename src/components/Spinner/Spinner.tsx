import "./style.scss";

interface IProps {
  className?: string;
}

export const Spinner = ({ className }: IProps) => {
  return (
    <svg
      className={"spinner " + className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_18_86)">
        <path
          d="M22.5 12.5C23.8807 12.5 25.0252 11.3697 24.7509 10.0166C24.2664 7.62662 23.0888 5.41116 21.3388 3.66117C18.9946 1.31696 15.8152 2.50291e-07 12.5 0C9.18479 -2.50291e-07 6.00537 1.31696 3.66117 3.66116C1.91117 5.41116 0.733649 7.62662 0.249134 10.0165C-0.0251993 11.3697 1.11929 12.5 2.5 12.5C3.88071 12.5 4.96104 11.3507 5.41284 10.046C5.78079 8.98341 6.38649 8.00691 7.1967 7.1967C8.60322 5.79018 10.5109 5 12.5 5C14.4891 5 16.3968 5.79018 17.8033 7.1967C18.6135 8.00691 19.2192 8.98341 19.5872 10.046C20.039 11.3507 21.1193 12.5 22.5 12.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_86">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
