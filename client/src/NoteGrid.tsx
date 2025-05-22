import { NotesProps } from "./types/NotesProps";

const NoteGrid = ({ notes, setNotes }: NotesProps) => {
  const notesMap = notes.map((note, index) => {
    return (
      <div
        className="relative flex h-75 w-50 flex-col rounded-lg text-left shadow-[0px_0px_8px_rgba(0,0,0,0.25)]"
        key={index}
      >
        <div className="mt-4 text-center">
          <h1 className="text-xl font-bold">{note.title}</h1>
        </div>
        <div className="px-4 py-4">
          <p className="text-sm font-medium break-words">{note.text}</p>
        </div>
        <span
          className="absolute right-2.5 bottom-0.5 cursor-pointer"
          onClick={() => deleteNote(index)}
        >
          <i className="fa-solid fa-xmark text-xs transition-colors duration-300 hover:text-red-500"></i>
        </span>
      </div>
    );
  });

  const deleteNote = (index: number) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      newNotes.splice(index, 1);
      return newNotes;
    });
  };

  const getNoteGridColsClass = () => {
    if (notes.length === 2) {
      return "md:grid-cols-2";
    } else if (notes.length === 3) {
      return "md:grid-cols-3";
    } else if (notes.length === 4) {
      return "md:grid-cols-3 lg:grid-cols-4";
    } else if (notes.length === 5) {
      return "md:grid-cols-3 xl:grid-cols-5";
    } else if (notes.length === 6) {
      return "md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6";
    }
  };

  return (
    <div className={`mt-20 grid grid-cols-1 gap-10 ${getNoteGridColsClass()}`}>
      {notesMap}
    </div>
  );
};

export default NoteGrid;
