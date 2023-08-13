import { Link } from "react-router-dom";
import "./style.scss";

interface IProps {
  className?: string;
}

export const SettingsLink = ({ className }: IProps) => {
  return (
    <Link className={"settingsLink " + className} to="/settings">
      Настройки
    </Link>
  );
};
