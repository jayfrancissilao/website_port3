import { useEffect, useState } from "react";
//   import logo here
import Logo from "/src/assets/NavbarLogo/logo.png";
// import App.css
import "/src/App.css";
// import menuicon from react icons
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggle menu btn
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   function for making navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 left-0 right-0 bg-white" : ""
        }`}
      >
        {/* for large device */}
        <div className="flex items-center justify-between ">
          {/* for logo */}
          <div className="cursor-pointer">
            <img src={Logo} alt="" className="h-10" />
          </div>
          {/* menu items for large devices */}
          <div className="lg:flex items-center gap-3 hidden text-body text-lg">
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer text-body hover:text-gray-400 "
            >
              Home
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Skills
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              About Me
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Portfolio
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Testimonials
            </a>
          </div>
          {/* contact btn */}
          <div className="lg:block hidden">
            <button className="outLineBtn">Contact Me</button>
          </div>
          {/* menu btn for small devices */}
          <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>
        {/* menu items for small devices */}
        {isMenuOpen && (
          <div className="mt-4 p-4 bg-body rounded-lg text-white">
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400 "
            >
              Home
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Skills
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              About Me
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Portfolio
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer  hover:text-gray-400 "
            >
              Testimonials
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
