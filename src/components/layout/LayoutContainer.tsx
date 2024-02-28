import React, { Fragment, ReactNode } from "react";
import Header from "./Header";

interface LayoutContainerProps {
  children: ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return (
    <Fragment>
      <div className="w-full min-h-screen flex flex-col items-center justify-start">
        <Header />
        {children}
      </div>
    </Fragment>
  );
};

export default LayoutContainer;
