import { useEffect, useState } from "react";

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

  //   import logo here

  return (
    <header>
      <nav>
        {/* for large device */}
        <div>
          {/* for logo */}
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
