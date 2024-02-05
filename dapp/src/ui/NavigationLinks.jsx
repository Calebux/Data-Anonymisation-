import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <ul className="flex gap-x-[70px] items-center text-white text-opacity-[50%] navlinks">
      <li>
        <NavLink to={"home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>How it works</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Pricing</NavLink>
      </li>
    </ul>
  );
}

export default NavigationLinks;
