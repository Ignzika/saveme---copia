import { NavLink as NavLinkReacRouter } from "react-router-dom";
//larga vida a san midudev : https://youtu.be/iPNt12IdbCU?si=E0AOoNsjDooNirkW&t=4244

export const NavLink = ({ to, children, ...props }) => {
  return (
    
    <NavLinkReacRouter
  
      {...props}
      className={({ isActive }) =>
        isActive
          ? "text-warning mt-pe-2 text-decoration-none"
          : "text-white mt-2 pe-2 text-decoration-none"
      }
      to={to}
    >
      {children}{" "}
    </NavLinkReacRouter>
  );
};
