import bg_img from '../../assets/depositphotos_221606162-stock-photo-chef-cook-preparing-vegetables-his.jpg'

const Banner = () => {
    return (
        <div>
              <div className="hero  min-h-[700px] rounded-xl overflow-hidden" style={{backgroundImage: `url(${bg_img})`}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Have Your Delicious Meal from Food Village</h1>
      <p className="mb-5">Here You Can get the best and most spicy food among the other restaurant in this city. Have Yur meal with tease and joyfully</p>
      <button className="btn btn-neutral rounded-full mr-12">Explore Now</button>
      <button className="btn btn-accent rounded-full">Your Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;