import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

function App({ children }: IProps) {
  return <section className="app">{children}</section>;
}

export default App;
