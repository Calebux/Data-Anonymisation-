/* eslint-disable react/prop-types */

function InstructionCard({ direction = "left", title, details }) {
  return (
    <div
      className={`${direction === "right" ? "self-end" : "self-start"} w-[600px]`}
    >
      <h2
        className={`${direction === "right" ? "text-right" : "text-left"} font-extrabold text-lg mb-4`}
      >
        {title}
      </h2>
      <div className="p-6 bg-dark60 border-[1px] border-solid border-white w-full rounded-lg h-[143px] text-left">
        <p className="font-medium text-base leading-6">{details}</p>
      </div>
    </div>
  );
}

export default InstructionCard;
