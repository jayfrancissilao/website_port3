import AboutProfile from "/src/assets/AboutPicture/profile_latest.png";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10">
        {/* image here */}
        <div className="sm:w-1/2">
          <img src={AboutProfile} alt="" className="w-full sm:w-11/12" />
        </div>
        {/* text here */}
        <div className="sm:w-1/2">
          <p className="text-xl font-semibold mb-5">About</p>
          <h2 className="md:text-5xl text-4xl font-bold">About Me</h2>
          <p className="mt-8 md:pr-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            hic ipsam suscipit velit, delectus rem commodi omnis dolore odit
            doloremque fuga consequuntur distinctio, inventore non optio cumque
            facilis. Aliquid.
          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
