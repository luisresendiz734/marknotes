import { proxy, subscribe } from "valtio";
import { getAllNotes, getFolderNames, getNotesByFolder, saveNote } from "../utils/api";


interface INote {
	data: {
		tags: Array<string>;
		title: string;
		created_at: string;
		updated_at: string;
	};
	content: string;
}

interface IStore {
	folders: Array<string>;
	notes: Array<INote>;
	note: INote | null;
	updateFolder: (folder: string) => void;
	onChangeNote: (content: string) => void;
    updateNote: (note: INote) => void
}

const updateFolder = (folder: string): void => {
    state.notes = folder === "All" ? getAllNotes() : getNotesByFolder(folder);
}

const onChangeNote = (content: string) => {
	state.note.content = content;
	saveNote();
}

const updateNote = (note: INote) => {
    state.note = note;
}

export const state = proxy<IStore>({
    folders: getFolderNames(),
    notes: getAllNotes(),
    note: null,
    updateFolder,
    onChangeNote,
    updateNote
})
