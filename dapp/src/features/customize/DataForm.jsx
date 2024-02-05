import { useData } from "../../context/DataContext";
import FormControl from "../../ui/FormControl";

function DataForm() {
  const { data } = useData();
  return (
    <form className="bg-transparentBlue min-h-[250px] rounded-lg border-[0.3px] border-solid border-white py-[26px] px-6 ">
      {data.length === 0 ? (
        <h1 className="text-3xl font-bold text-center text-white mt-11">
          Add new data to get started!👆🏾
        </h1>
      ) : (
        <div className="grid grid-cols-[1fr] gap-y-6">
          {data.map((data, i) => (
            <FormControl key={i}>
              <label htmlFor={data.id}>{data.label}</label>
              <input type={data.type} id={data.id} />
            </FormControl>
          ))}
          {/* <FormControl>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </FormControl>
          <FormControl>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
          </FormControl>
          <FormControl>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </FormControl>
          <FormControl>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" />
          </FormControl>
          <FormControl>
            <label htmlFor="review">Review</label>
            <input type="text" id="review" />
          </FormControl> */}
          <div className="flex justify-center">
            <button className=" flex w-fit self-center px-8  items-center justify-center rounded-full bg-primaryColor py-[12px] text-center text-base font-bold uppercase text-white  border-[#f5f5f5] border-[0.2px] border-solid">
              Go
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default DataForm;
