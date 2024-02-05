import AddTypeContainer from "../features/customize/AddTypeContainer";
import DataForm from "../features/customize/DataForm";

function CustomizePage() {
  return (
    <div className="bg-bg2 bg-no-repeat bg-cover min-h-screen pt-[116px] pb-10 text-white px-[100px]">
      <h2 className="font-semibold text-base mb-2">Customize Data type</h2>
      <AddTypeContainer />
      <div className="mt-[38px]">
        <h2 className="font-semibold text-base mb-2">Input your data</h2>
        <DataForm />
      </div>
    </div>
  );
}

export default CustomizePage;
