import ComButton from "@/pages/shared/Button/ComButton";
import SliderBanner from "./Slider/SliderBanner";





const Banner = () => {
  return (
    <div className="my-20">
      <div className="flex lg:flex-row flex-col items-center justify-evenly">
        <div className="basis-1/4">
          <h1 className="lg:text-[36px] md:text-[32px] text-[100%] font-extrabold uppercase ">Finding the rights sporting Solution!</h1>
          <p className="mt-4">
            To be able to fully service the global game requires in-depth
            knowledge and experience delivering B2C/B2B global and localised
            products. I understand that all stakeholders have different
            requirements and goals, that's why I tailor the services that meet
            the needs of your busine
          </p>
           <ComButton />
        </div>

        <div className="basis-1/2">
            <SliderBanner />
        </div>
      </div>
    </div>
  );
};

export default Banner;
