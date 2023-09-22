import ReviewCard from "./ReviewCard";
const Testimonials = () => {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bgShade py-32">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">Feedback to my work</p>
        <h2 className="md:text-5xl text-4xl font-bold">Friends Testimonials</h2>
      </div>
      <ReviewCard />
    </div>
  );
};

export default Testimonials;
