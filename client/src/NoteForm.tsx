import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Note } from "./types/Note";
import { NotesProps } from "./types/NotesProps";

const NoteForm = ({ setNotes }: NotesProps) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const minimizeMaximize = () => {
    setIsMinimized((prevIsMinimized) => !prevIsMinimized);
  };

  const { register, handleSubmit, reset, watch } = useForm<Note>();

  const titleCharacters = watch("title", "");
  const textCharacters = watch("text", "");

  const onSubmit: SubmitHandler<Note> = (data) => {
    setNotes((prevNotes) => [...prevNotes, data]);
    reset();
  };

  const getTitleCharsTextColorClass = () => {
    if (titleCharacters.length <= 5) {
      return "text-green-500";
    } else if (titleCharacters.length <= 10) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const getTextCharsTextColorClass = () => {
    if (textCharacters.length <= 150) {
      return "text-green-500";
    } else if (textCharacters.length <= 200) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <div
      className={`${!isMinimized ? "fixed right-2 bottom-2 h-100 w-75 rounded-sm bg-white px-4 py-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)]" : "fixed right-12 bottom-12"}`}
    >
      <button
        className="absolute top-[-20px] left-[-20px] h-10 w-10 transform cursor-pointer rounded-full bg-[hsl(0,0%,25%)] text-white shadow-[0px_0px_8px_rgba(0,0,0,0.25)] transition duration-200 hover:scale-110"
        onClick={() => minimizeMaximize()}
      >
        {!isMinimized ? (
          <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
        ) : (
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        )}
      </button>
      {!isMinimized ? (
        <form
          className="items-left flex flex-col justify-center text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="mb-4 font-semibold" htmlFor="taskName">
            _note title.
          </label>
          <div className="relative mb-5">
            <input
              className="w-full rounded-sm px-2.5 py-2.5 text-sm shadow-[0px_0px_8px_rgba(0,0,0,0.25)] outline-none"
              type="text"
              placeholder="E.g. Buy Groceries"
              {...register("title", { required: true, maxLength: 10 })}
            />
            <span
              className={`absolute right-2 bottom-0.5 text-[0.5rem] font-medium ${getTitleCharsTextColorClass()}`}
            >
              {titleCharacters.length}/10
            </span>
          </div>
          <label className="mb-4 font-semibold" htmlFor="taskContent">
            _note text.
          </label>
          <div className="relative">
            <textarea
              className="h-35 w-full resize-none rounded-sm px-2.5 py-2.5 text-sm shadow-[0px_0px_8px_rgba(0,0,0,0.25)] outline-none"
              placeholder="E.g. List of Groceries"
              {...register("text", { required: true, maxLength: 200 })}
            ></textarea>
            <span
              className={`absolute right-2 bottom-2 text-[0.5rem] font-medium ${getTextCharsTextColorClass()}`}
            >
              {textCharacters.length}/200
            </span>
          </div>
          <button className="mt-6 cursor-pointer rounded-full bg-[hsl(0,0%,25%)] py-4 font-semibold text-white shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
            _submit note.
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default NoteForm;
