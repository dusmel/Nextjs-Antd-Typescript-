import * as React from "react";
import Header from "components/common/header";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Header title={title} />
    <div className="children-container">{children}</div>
  </div>
);

export default Layout;
