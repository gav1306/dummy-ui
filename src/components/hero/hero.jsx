import coverVideo from "@/assets/video/cover.mp4";
import { Button } from "@/components/ui/button";

const HEADING = "Baked with Love";
const SUB_HEADING =
  "At our bakery, we pour our hearts into every cake, ensuring that each creation is as unique and memorable as the moments you celebrate.";

const Hero = () => {
  return (
    <section className="relative p-14 flex items-center min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
      >
        <source src={coverVideo} type="video/mp4" />
      </video>
      <div className="flex flex-col gap-10 items-start">
        <h1 className="font-extrabold text-6xl text-primary capitalize">
          {HEADING}
        </h1>
        <span className="text-secondary text-xl md:w-[500px]">
          {SUB_HEADING}
        </span>
        <Button className="capitalize text-lg px-10 py-6">order now</Button>
      </div>
    </section>
  );
};

export default Hero;
