import { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../../store/store";
import TextEditor from "../TextEditor";
import Container from "./Container";

const Editor = () => {
	const { note } = useSnapshot(state);
	const [isEditing, setIsEditing] = useState(false);

	const toggleEditing = () => {
		setIsEditing((state) => !state);
	};

	return (
		<Container w="3/5">
			{note && (
				<button onClick={toggleEditing}>
					{isEditing ? "view" : "edit"}
				</button>
			)}
			{isEditing ? (
				<TextEditor content={note.content} />
			) : (
				<pre>{note && note.content}</pre>
			)}
		</Container>
	);
};

export default Editor;
