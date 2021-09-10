import React from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { NotesProvider } from "../context/NotesContext";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<NotesProvider>
				<Component {...pageProps} />
			</NotesProvider>
		</React.Fragment>
	);
}

export default MyApp;
