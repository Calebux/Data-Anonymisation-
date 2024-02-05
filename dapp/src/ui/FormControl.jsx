/* eslint-disable react/prop-types */
function FormControl({ children }) {
  return (
    <div className="grid grid-cols-[90px_1fr] items-center form-control">
      {children}
    </div>
  );
}

export default FormControl;
