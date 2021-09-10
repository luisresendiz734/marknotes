import { FC } from "react";

const Container: FC<{ w: string }> = ({ children, w }) => {
	return (
		<div className={`w-${w} h-screen overflow-y-scroll`}>{children}</div>
	);
};

export default Container;
