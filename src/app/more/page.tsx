import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";

const morePage = () => {
  const morelink = [
    {
      title: "Tiktok(Modern web developer)",
      description:
        "I posted a video on Tiktok on how to write modern HTML, CSS, Javascript and more... ",
      link: "https://vm.tiktok.com/ZMktpDDpJ/",
    },
    {
      title: "Tiktok(How to write your coding resume)",
      description: "I posted a video on Tiktok on how to write a good resume.",
      link: "https://vm.tiktok.com/ZMktpyeqa/",
    },
    {
      title: "X(100 days of code)",
      description: "My day 65 of 100 days of coding challange.",
      link: "https://x.com/emmanuel_dev3/status/1890175419204403394?t=s1Au65i6EnbtqI3A7kDYyg&s=19 ",
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <PackagePlus className="h-4 w-4" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {morelink.map((value, indx) => {
          return (
            <FramerWrapper
              key={indx}
              className="max-w-[32%] max-lg:max-w-full"
              y={0}
              scale={0.8}
              delay={indx / 4}
              duration={0.15}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-poppins ">{value.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={value.link}
                    target="blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full gap-3"
                    )}
                  >
                    {" "}
                    <ExternalLink />
                    Visit here
                  </Link>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;
