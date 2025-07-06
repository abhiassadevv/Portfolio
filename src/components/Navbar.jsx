const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-10">
        <div className="flex justify-start items-center">
          <a href="" className="text-xl font-bold text-white">
            Abhiassa Dev
          </a>
        </div>
        <div className="flex justify-end items-center gap-5">
          <button>
            <i className="bi bi-moon-fill text-lg text-white"></i>
          </button>
          <button>
            <i className="bi bi-list text-2xl text-white"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
