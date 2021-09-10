import { useNotes } from "../../context/NotesContext";
import Container from "./Container";

const Editor = () => {
	const { note } = useNotes();
	return (
		<Container w="3/5">
			<pre>{note && note.content}</pre>
		</Container>
	);
};

export default Editor;
