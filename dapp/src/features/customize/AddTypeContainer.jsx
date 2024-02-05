import { useState } from "react";
import FormControl from "../../ui/FormControl";
import { useData } from "../../context/DataContext";

function AddTypeContainer() {
  const [type, setType] = useState("text");
  const [title, setTitle] = useState("");
  const { dispatch } = useData();

  function addData(e) {
    e.preventDefault();
    if (!title || !type) return;
    dispatch({
      type: "new-data",
      payload: {
        label: title,
        type,
        id: title.toLowerCase(),
      },
    });
    setTitle("");
    setType("text");
  }
  return (
    <form className="bg-transparentBlue rounded-lg border-[0.3px] border-solid border-white py-[26px] px-6 grid grid-cols-[1fr_190px] gap-x-6">
      <div className="flex flex-col gap-y-6">
        <FormControl>
          <label htmlFor="type">Data type:</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
      </div>
      <div className="flex items-end">
        <button
          className=" flex w-fit px-8  items-center justify-center rounded-full bg-primaryColor py-[12px] text-center text-base font-bold uppercase text-white disabled:cursor-not-allowed  border-[#f5f5f5] border-[0.2px] border-solid"
          onClick={addData}
          disabled={!title || !type}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTypeContainer;
