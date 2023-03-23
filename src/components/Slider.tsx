import { useState } from "react";
import { sliderContent } from "../constants";

export function Slider(): JSX.Element {
  const [sliderState, setSliderState] = useState(2);
  const [isNextValid, setIsNextValid] = useState(true);
  const [isPrevValid, setIsPrevValid] = useState(false);
  function nextSlideHandler() {
    if (sliderContent[sliderState + 3]) setSliderState(sliderState + 1);
    !sliderContent[sliderState + 4] && setIsNextValid(false);

    sliderContent[sliderState - 2] && setIsPrevValid(true);
  }
  function prevSlideHandler() {
    if (sliderContent[sliderState - 3]) setSliderState(sliderState - 1);
    !sliderContent[sliderState - 4] && setIsPrevValid(false);

    sliderContent[sliderState + 2] && setIsNextValid(true);
  }
  function categorySelectHandler() {}
  return (
    <div className="flex items-center gap-3 min-w-[570px] pl-6">
      {isPrevValid && (
        <span
          className="font-extrabold cursor-pointer text-lg absolute left-[144px]"
          onClick={prevSlideHandler}
        >
          &lt;
        </span>
      )}
      <div
        className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
        onClick={categorySelectHandler}
      >
        <h1 className="text-center line text-lg font-bold">
          {sliderContent[sliderState - 2]}
        </h1>
      </div>
      <div
        className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
        onClick={categorySelectHandler}
      >
        <h1 className="text-center line text-lg font-bold">
          {sliderContent[sliderState - 1]}
        </h1>
      </div>
      <div
        className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
        onClick={categorySelectHandler}
      >
        <h1 className="text-center line text-lg font-bold">
          {sliderContent[sliderState]}
        </h1>
      </div>
      <div
        className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
        onClick={categorySelectHandler}
      >
        <h1 className="text-center line text-lg font-bold">
          {sliderContent[sliderState + 1]}
        </h1>
      </div>
      <div
        className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
        onClick={categorySelectHandler}
      >
        <h1 className="text-center line text-lg font-bold">
          {sliderContent[sliderState + 2]}
        </h1>
      </div>
      {isNextValid && (
        <span
          className="font-extrabold cursor-pointer text-lg"
          onClick={nextSlideHandler}
        >
          &gt;
        </span>
      )}
    </div>
  );
}
