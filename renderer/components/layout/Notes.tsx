import { useNotes } from "../../context/NotesContext";
import Container from "./Container";

const Notes = () => {
	const { notes, changeNote } = useNotes();

	return (
		<Container w="1/5">
			{notes?.length &&
				notes.map((note, i) => (
					<p key={i} onClick={() => changeNote(note)}>
						{note.data.title}
					</p>
				))}
		</Container>
	);
};

export default Notes;
