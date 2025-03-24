import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="w-full text-sm text-center font-medium rounded-lg bg-gray-700 border-gray-600 text-white">
      <h3 className="text-2xl tracking-tight text-white">
        <NavLink to="/dashboard/admin">Admin Panel</NavLink>
      </h3>

      <NavLink
        to="/dashboard/admin/create_category"
        className={({ isActive }) =>
          `block w-full px-4 py-2 border-y cursor-pointer 
             border-gray-600 
           hover:bg-cyan-900 hover:text-white 
           ${isActive ? "bg-cyan-900 text-blue-50" : ""}`
        }
      >
        Manage Category
      </NavLink>

      <NavLink
        to="/dashboard/admin/create_product"
        className={({ isActive }) =>
          `block w-full px-4 py-2 border-b  cursor-pointer 
             border-gray-600 
           hover:bg-cyan-900 hover:text-white 
           ${isActive ? "bg-cyan-900 text-white" : ""}`
        }
      >
        Create Product
      </NavLink>
      <NavLink
        to="/dashboard/admin/products"
        className={({ isActive }) =>
          `block w-full px-4 py-2 border-b  cursor-pointer 
             border-gray-600 
           hover:bg-cyan-900 hover:text-white 
           ${isActive ? "bg-cyan-900 text-white" : ""}`
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/dashboard/admin/orders"
        className={({ isActive }) =>
          `block w-full px-4 py-2 border-b  cursor-pointer 
             border-gray-600 
           hover:bg-cyan-900 hover:text-white 
           ${isActive ? "bg-cyan-900 text-white" : ""}`
        }
      >
        Orders
      </NavLink>
      <NavLink
        to="/dashboard/admin/users"
        className={({ isActive }) =>
          `block w-full px-4 py-2 rounded-b-lg cursor-pointer 
             border-gray-600 
           hover:bg-cyan-900 text-white 
           ${isActive ? " bg-cyan-900 text-white" : ""}`
        }
      >
        Users
      </NavLink>
    </div>
  );
};

export default AdminMenu;
