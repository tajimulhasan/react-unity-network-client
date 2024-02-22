/**Here is two method:
 * First of all: Approach 1: Using Link and Outlet without state
 * This approach is simpler and might be more suitable for smaller applications.
 * It relies on the nested route components to be defined in the same component hierarchy.
 * ---------------------
 * Second method is:
 * ---------------------
 * Approach 2: Using state and conditional rendering
 * (conmment out below)
 */

import "./Admin.css";

import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  
  return (
    <div className="m-4">
    <Sidebar></Sidebar>
    </div>
  );
};

export default Admin;
