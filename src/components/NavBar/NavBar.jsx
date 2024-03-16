import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    return (
        <div className="lg:mx-12">
              <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2  shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Recipe</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-gray-700">Food Village</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal lg:mr-36 px-1">
      <li><a>Home</a></li>
      <li><a>Recipe</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end lg:space-x-9">
  <label className="border-2 p-1 hidden lg:block bg-slate-300 rounded-full flex items-center gap-2">
  <input type="text" className="ml-5 bg-slate-300 text-white "  placeholder="Search" />
  
</label>
    <a className="">
        <CgProfile  className="text-3xl"/>
        </a>
  </div>
</div>
        </div>
    );
};

export default NavBar;