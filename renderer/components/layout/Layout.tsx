import { FC } from "react";

const Layout: FC = ({ children }) => {
	return <div className="w-screen h-screen flex">{children}</div>;
};

export default Layout;
