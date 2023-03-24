import { useState } from "react";
import { sliderContent } from "../constants";
import { TSliderProps, TSlideProps } from "../types";

export function Slider({onSlideSelect}: TSliderProps): JSX.Element {
  const [sliderIndex, setsliderIndex] = useState(2);
  const [isNextValid, setIsNextValid] = useState(true);
  const [isPrevValid, setIsPrevValid] = useState(false);
  
  
  function nextSlideHandler() {
    sliderContent[sliderIndex + 3] && setsliderIndex(sliderIndex + 1);
    !sliderContent[sliderIndex + 4] && setIsNextValid(false);
    sliderContent[sliderIndex - 2] && setIsPrevValid(true);
  }


  function prevSlideHandler() {
    sliderContent[sliderIndex - 3] && setsliderIndex(sliderIndex - 1);
    !sliderContent[sliderIndex - 4] && setIsPrevValid(false);
    sliderContent[sliderIndex + 2] && setIsNextValid(true);
  }

  function categorySelectHandler(selectedValue: string) {
    onSlideSelect(selectedValue)
  }

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

      <Slide onClick={() => categorySelectHandler(sliderContent[sliderIndex - 2])}>
        {sliderContent[sliderIndex - 2]}
      </Slide>
      <Slide onClick={() => categorySelectHandler(sliderContent[sliderIndex - 1])}>
        {sliderContent[sliderIndex - 1]}
      </Slide>
      <Slide onClick={() => categorySelectHandler(sliderContent[sliderIndex])}>
        {sliderContent[sliderIndex]}
      </Slide>
      <Slide onClick={() => categorySelectHandler(sliderContent[sliderIndex + 1])}>
        {sliderContent[sliderIndex + 1]}
      </Slide>
      <Slide onClick={() => categorySelectHandler(sliderContent[sliderIndex + 2])}>
        {sliderContent[sliderIndex + 2]}
      </Slide>

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

function Slide({ onClick, children }: TSlideProps): JSX.Element {
  return (
    <div
      className="bg-white hover:bg-cyan rounded-xl shadowy w-[95px] h-[74px] cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <h1 className="text-center line text-lg font-bold">{children}</h1>
    </div>
  );
}
