import { createContext, FC, useContext, useState } from "react";
import { getAllNotes, getFolderNames, getNotesByFolder } from "../utils/api";

interface INote {
	data: {
		tags: Array<string>;
		title: string;
		created_at: string;
		updated_at: string;
	};
	content: string;
}

interface INotesContext {
	folders: Array<string>;
	notes: Array<INote>;
	note: INote;
	changeFolder: (folder: string) => void;
	changeNote: (note: INote) => void;
}

const NotesContext = createContext<INotesContext | null>(null);

const NotesProvider: FC = ({ children }) => {
	const [folders, setFolders] = useState<Array<string>>(getFolderNames());
	const [notes, setNotes] = useState<Array<INote>>([]);
	const [note, setNote] = useState<INote | null>(null);

	const changeFolder = (folder: string) => {
		if (folder === "All") {
			setNotes(getAllNotes());
		} else {
			setNotes(getNotesByFolder(folder));
		}
	};

	const changeNote = (note: INote) => {
		setNote(note);
	};

	return (
		<NotesContext.Provider
			value={{
				folders,
				notes,
				note,
				changeFolder,
				changeNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
