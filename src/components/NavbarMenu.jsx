import Button from "./Button";

const NavbarMenu = () => {
  return (
    <>
      <ul className="absolute inset-0 -z-1 bg-black h-screen w-screen flex flex-col justify-start items-start px-8">
        <li className="border-b-3 border-transparent py-2 mt-32 hover:border-blue-700 hover:duration-300">
          <a href="" className="text-base font-semibold text-white">
            Home
          </a>
        </li>
        <li className="border-b-3 border-transparent py-2 mt-6 hover:border-blue-700 hover:duration-200">
          <a href="" className="text-base font-semibold text-white">
            About
          </a>
        </li>
        <li className="border-b-3 border-transparent py-2 mt-6 hover:border-blue-700 hover:duration-200">
          <a href="" className="text-base font-semibold text-white">
            Tech
          </a>
        </li>
        <li className="border-b-3 border-transparent py-2 mt-6 hover:border-blue-700 hover:duration-200">
          <a href="" className="text-base font-semibold text-white">
            Projects
          </a>
        </li>
        <li className="border-b-3 border-transparent py-2 mt-6 hover:border-blue-700 hover:duration-200">
          <a href="" className="text-base font-semibold text-white">
            Contacts
          </a>
        </li>
        <div className="flex justify-center items-center w-full mt-10">
          <Button
            width="w-64"
            classname="rounded-full text-base font-bold text-white"
          >
            Connect With Me
          </Button>
        </div>
      </ul>
    </>
  );
};

export default NavbarMenu;
