import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            June 2024 - Present
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Computer Science(Online), <br /> IU International
              University Of Applied Science
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I am currently studying for a Bachelor of Computer Science at IU
              International University of Applied Sciences, an open university
              in <strong>Germany</strong>. The program has provided me with a
              well-rounded education, covering both theoretical foundations and
              practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            2020 - 2020
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl capitalize font-rubik max-sm:text-xl">
              New Bethel Model Secondary School(Emene, Enugu)
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I wrote my WAEC at New Bethel Model Secondary School after
              attending M.O.G. Lesson Center in Emene, Enugu State.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            September 2019 - 2020
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl capitalize font-rubik max-sm:text-xl">
              St. Joseph Secondary School(Emene, Enugu)
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              After relocating from Nenwe, Aninri to Emene, Enugu with my
              family, I began my education at St. Joseph Secondary School. The
              school significantly contributed to my academic improvement.
              However, due to the high fees for the WAEC examination, I decided
              to leave the school and enroll in a lesson center, where I could
              take the WAEC at a more affordable rate.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            September 2015 - 2019
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl capitalize font-rubik max-sm:text-xl">
              Awgu High School Nenwe(Aninri, Enugu)
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I attended Awgu High School Nenwe from JSS2 to SS1.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            February 2014 - 2015
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl capitalize font-rubik max-sm:text-xl">
              Awgu Boy&apos;s Secondary School Awgu(Awgu, Enugu)
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              This is where I began my secondary school education before
              relocating to Nenwe with my family.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
