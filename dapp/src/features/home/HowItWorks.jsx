import InstructionCard from "./InstructionCard";

function HowItWorks() {
  return (
    <div className="text-white py-[45px] bg-no-repeat bg-cover px-[100px] text-center bg-bg2 min-h-screen">
      <h1 className="text-2xl font-extrabold mb-[20px]">How It Works</h1>
      <p className="font-normal text-base leading-6">
        Unlock the power of anonymization with AnonymizeHub
        <br /> through our simple and effective process
      </p>
      <div className="flex flex-col mt-5">
        <InstructionCard
          title={"Upload Data"}
          details={
            "Begin by securely uploading your data to AnonymizeHub. Our platform supports a variety of data formats, ensuring compatibility with your diverse datasets."
          }
        />
        <InstructionCard
          title={"Configure Anonymization Settings"}
          direction="right"
          details={
            "Begin by securely uploading your data to AnonymizeHub. Our platform supports a variety of data formats, ensuring compatibility with your diverse datasets."
          }
        />
        <InstructionCard
          title={"Initiate Anonymization"}
          details={
            "Begin by securely uploading your data to AnonymizeHub. Our platform supports a variety of data formats, ensuring compatibility with your diverse datasets."
          }
        />
        <InstructionCard
          title={"Review and Confirm"}
          direction="right"
          details={
            "Begin by securely uploading your data to AnonymizeHub. Our platform supports a variety of data formats, ensuring compatibility with your diverse datasets."
          }
        />
        <InstructionCard
          title={"Download data"}
          details={
            "Begin by securely uploading your data to AnonymizeHub. Our platform supports a variety of data formats, ensuring compatibility with your diverse datasets."
          }
        />
      </div>
    </div>
  );
}

export default HowItWorks;
