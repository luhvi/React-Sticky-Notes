import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./Navbar";
import NoteForm from "./NoteForm";
import { useState } from "react";
import { Note } from "./types/Note";
import NoteGrid from "./NoteGrid";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <Navbar />
      <NoteGrid notes={notes} setNotes={setNotes} />
      <NoteForm notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
