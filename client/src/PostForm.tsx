import { useState } from "react";

const PostForm = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const minimizeMaximize = () => {
    setIsMinimized((prevIsMinimized) => !prevIsMinimized);
  };

  return (
    <div
      className={`${!isMinimized ? "fixed right-2 bottom-2 h-100 w-75 rounded-sm bg-[hsl(0,0%,10%)] px-4 py-4 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]" : "fixed right-12 bottom-12"}`}
    >
      <button
        className="absolute top-[-20px] left-[-20px] h-10 w-10 cursor-pointer rounded-full bg-[hsl(0,0%,20%)]"
        onClick={() => minimizeMaximize()}
      >
        {!isMinimized ? (
          <i className="fa-solid fa-down-left-and-up-right-to-center text-[#61DBFB]"></i>
        ) : (
          <i className="fa-solid fa-up-right-and-down-left-from-center text-[#61DBFB]"></i>
        )}
      </button>
      {!isMinimized ? (
        <form
          className="items-left flex flex-col justify-center text-left"
          action=""
        >
          <label
            className="mb-1 font-semibold text-[#61DBFB]"
            htmlFor="taskName"
          >
            Post Name
          </label>
          <input
            className="mb-5 rounded-sm bg-[hsl(0,0%,15%)] px-2 py-2 text-white outline-none"
            type="text"
            name="taskName"
          />

          <label
            className="mb-1 font-semibold text-[#61DBFB]"
            htmlFor="taskContent"
          >
            Post Content
          </label>
          <textarea
            className="h-50 resize-none rounded-sm bg-[hsl(0,0%,15%)] px-2 py-2 text-white outline-none"
            name="taskContent"
          ></textarea>
        </form>
      ) : null}
    </div>
  );
};

export default PostForm;
