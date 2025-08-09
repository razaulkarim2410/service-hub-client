import React from "react";
import { useNavigate } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/pexels-jeswin-1619572.jpg";
import image2 from "../../assets/pexels-kindelmedia-6774432.jpg";
import image3 from "../../assets/pexels-mart-production-7709293.jpg";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto pt-10">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slide 1 */}
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-start">
              <h1 className="mb-5 text-4xl font-bold">Choose Your Perfect Plan</h1>
              <p className="mb-5 font-bold">
                Explore a variety of reliable home and emergency services tailored to your needs. Whether it’s AC repair, car rental, or cleaning – pick the service that fits your lifestyle, budget, and daily convenience perfectly.
              </p>
              <button
                onClick={() => navigate("/plan-details")}
                className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">Get Help When You Need</h1>
              <p className="mb-5 font-bold">
                From urgent repairs to routine cleaning, our trusted professionals are just a tap away. Enjoy fast, reliable service anytime, anywhere. Your comfort and convenience are always our top priority and commitment.
              </p>
              <button
                onClick={() => navigate("/help-details")}
                className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="hero h-250px w-full rounded-xl py-10 mt-14 bg-cover bg-center"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-end">
              <h1 className="mb-5 text-4xl font-bold">Simplify Your Daily Life</h1>
              <p className="mb-5 font-bold">
                Managing chores has never been easier. Book services like plumbing, pest control, or ambulance instantly—saving you time and stress. With just a few taps, get expert help delivered right to your door.
              </p>
              <button
                onClick={() => navigate("/simplify-details")}
                className="btn bg-pink-700 text-white hover:bg-white hover:text-pink-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
