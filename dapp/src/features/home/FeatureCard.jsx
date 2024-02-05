/* eslint-disable react/prop-types */
function FeatureCard({ feature_title, feature_description }) {
  return (
    <div className="border-[1px] border-solid border-white p-6 w-[536px] rounded-lg h-[245px] bg-transparent">
      <h1 className="font-extrabold text-lg mb-4">{feature_title}</h1>
      <p className="font-medium text-base leading-6">{feature_description}</p>
    </div>
  );
}

export default FeatureCard;
