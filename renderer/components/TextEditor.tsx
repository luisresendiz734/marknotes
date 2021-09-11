import { FC, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../store/store";

const TextEditor: FC<{ content: string }> = ({ content }) => {
	const [contentState, setContentState] = useState<string>(content || "");
	const { note, onChangeNote } = useSnapshot(state);

	useEffect(() => {
		onChangeNote(contentState);
	}, [contentState]);

	useEffect(() => {
		if (note) setContentState(note.content);
	}, [note]);

	return (
		<div>
			<textarea
				name="content"
				id="content"
				value={contentState}
				onChange={(e) => setContentState(e.target.value)}
			/>
		</div>
	);
};

export default TextEditor;
