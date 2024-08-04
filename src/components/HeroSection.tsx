import Particles from "../../@/components/magicui/particles";
import SocialsDock from "./SocialsDock";

const HeroSection = () => {

  return (
    <>
      <div className="h-[100dvh] relative flex w-full flex-col items-center justify-center font-poppins">
        <span className="md:text-left flex flex-col items-center gap-2 z-30 font-bold">
          <p className="p-2 font-semibold border-white w-max">Hello, I'm Ishant, a</p>
          <div className="font-obitron uppercase font-extrabold text-center tracking-widest text-4xl md:text-5xl lg:text-6xl">
            <h1 className="text-warm-white">Fullstack</h1>
            <h1 className="text-warm-white">Developer</h1>
          </div>
          <p className="text-xs lg:text-sm rounded-full mt-2 p-2 border-2 border-brown-white text-center">I build dynamic web <span className="text-orange-300">applications</span> from concept to <span className="text-cyan-400">deployment</span></p>
          <div className="absolute bottom-10">
            <SocialsDock />
          </div>
        </span>
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={80}
          color={'#ffffff'}
          refresh
        />
      </div>
    </>
  );
};

export default HeroSection;
