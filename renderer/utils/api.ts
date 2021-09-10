import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

const dir = "C:\\Users\\luis\\.notable\\notes";

interface INote {
	data: {
		tags: Array<string>
		title: string
		created_at: string
		updated_at: string
	},
	content: string
}

export const getNoteByName = (name: string): INote => {
    const note = readFileSync(path.join(dir, `${name}.md`), {
        encoding: "utf-8"
    }).toString();
    const { content, data } = matter(note);

    return { content, data } as INote;
}

export const getAllNotes = () => {
    const files = readdirSync(dir , {
        encoding: "utf-8"
    });
    
    const filenames = files.map(file => file.replace(".md", ""));
    const notes = filenames.map(filename => getNoteByName(filename));

    return notes;
}

export const getNotesByFolder = (folder: string) => {
    const notes = getAllNotes();
    const filtered = notes.filter(note => note.data["tags"].includes(folder));
    return filtered;
}

export const getFolderNames = () => {
     const notes = getAllNotes();
     const folders = new Set<string>();

     for(let note of notes) { // TODO: change tags for folders
         note.data["tags"].map((folder: string) => folders.add(folder));
     }
     
     return ["All", ...Array.from(folders)];
}