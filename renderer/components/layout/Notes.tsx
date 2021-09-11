import { useSnapshot } from "valtio";
import { state } from "../../store/store";
import Container from "./Container";

const Notes = () => {
	const { notes, updateNote } = useSnapshot(state);

	return (
		<Container w="1/5">
			{notes?.length &&
				notes.map((note, i) => (
					<p key={i} onClick={() => updateNote(note)}>
						{note.data.title}
					</p>
				))}
		</Container>
	);
};

export default Notes;
