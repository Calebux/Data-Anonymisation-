import FeatureCard from "./FeatureCard";

function CoreFeatures() {
  return (
    <div className="text-white py-[45px] bg-black px-[100px] text-center">
      <h1 className="text-2xl font-extrabold mb-[65px]">Our Core Features</h1>
      <div className="flex items-center justify-between">
        <FeatureCard
          feature_description={
            "Effortlessly safeguard your data with our seamless anonymization process. Say goodbye to data privacy concerns as Dataharsh ensures a smooth and intuitive anonymization experience for various data types."
          }
          feature_title={"Seamless Anonymization"}
        />
        <FeatureCard
          feature_title={"Customizable Settings"}
          feature_description={
            "Tailor the anonymization process to fit your unique needs. AnonymizeHub provides you with customizable settings, allowing you to have granular control over how your data is anonymized. Your privacy, your preferences."
          }
        />
      </div>
      <div className="flex justify-center mt-[81px]">
        <FeatureCard
          feature_title={"Secure Data Handling"}
          feature_description={
            "Trust is paramount when it comes to data handling. AnonymizeHub prioritizes your security, employing robust measures to handle your data with the utmost care. Benefit from a platform that ensures end-to-end encryption and secure data management practices. Your data's security is our commitment."
          }
        />
      </div>
    </div>
  );
}

export default CoreFeatures;
