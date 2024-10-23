import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { Spotlight } from './ui/Spotlight';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="pb-20 pt-5">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgb(108,230,130)"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="rgb(108,230,130)"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="rgb(242,242,242)"
        />
      </div>

      <div className="flex items-center aboslute z-5 justify-center sm:w-[250px] w-[30vw] overflow-hidden sm:h-[20vh] h-[15vh] ml-[-20px]">
        <img
          src="/turtleLogo.png"
          alt="logo-img"
          className="object-cover object-center fill"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-whiteTurtle-100 max-w-80">
            Get your MVP with ease.
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transform Your Ideas Into Reality"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello, We are Coding Turtles. We develop software for our clients.
          </p>
          <a href="#about">
            <MagicButton
              title="Show our work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
}
