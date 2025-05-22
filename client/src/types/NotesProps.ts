import { Note } from "./Note";
import { Dispatch } from "react";
import { SetStateAction } from "react";

export type NotesProps = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};
