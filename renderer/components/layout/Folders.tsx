import { useSnapshot } from "valtio";
import { state } from "../../store/store";
import Container from "./Container";

const Folders = () => {
	const { folders, updateFolder } = useSnapshot(state);

	return (
		<Container w="1/5">
			{folders.map((folder, i) => (
				<p key={i} onClick={() => updateFolder(folder)}>
					{folder}
				</p>
			))}
		</Container>
	);
};

export default Folders;
