//component
import Social from "@/components/Social";

//ui
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-blue-500 ">Danardi Listyono</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I design and build a variety of digital applications, leveraging my skills in numerous programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base 
                  hover:bg-blue-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;