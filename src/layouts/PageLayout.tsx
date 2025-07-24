import { type ReactNode } from "react";
import Header from "../components/common/Header";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="page-wrapper">{children}</div>
    </>
  );
}

export default PageLayout;
