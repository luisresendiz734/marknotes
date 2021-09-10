import { useNotes } from "../../context/NotesContext";
import Container from "./Container";

const Folders = () => {
	const { folders, changeFolder } = useNotes();

	return (
		<Container w="1/5">
			{folders.map((folder, i) => (
				<p key={i} onClick={() => changeFolder(folder)}>
					{folder}
				</p>
			))}
		</Container>
	);
};

export default Folders;
