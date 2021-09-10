import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Editor from "../components/layout/Editor";
import Folders from "../components/layout/Folders";
import Notes from "../components/layout/Notes";

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Marknotes</title>
			</Head>
			<Layout>
				<Folders />
				<Notes />
				<Editor />
			</Layout>
		</React.Fragment>
	);
};

export default Home;
