import HomePicture from "/src/assets/HomePicture/homeynobg.png";
const Home = () => {
  return (
    <div className="mt-19 bg-bgShade " id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        {/* left picture here */}
        <div className="md:w-1/2 w-full">
          <img src={HomePicture} alt="" className="w-full" />
        </div>
        {/* right text here */}
        <div className="md:w-1/2 w-full mt-5">
          <h3 className="text-xl text-headingColor font-semibold mb-5">
            Hey My Name Jay Silao
          </h3>
          <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading-[76px] mb-5">
            I create <span className="text-primary">Web design</span> and
            Websites
          </h1>
          <p className="text-body text-1xl leading-9 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            illo in fugit error cumque reiciendis voluptate, tempore dolores
            quia, minima itaque, ullam excepturi aperiam beatae unde laudantium
            qui aliquam recusandae.
          </p>
          <button className="btn-primary">My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
