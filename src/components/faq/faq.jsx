import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "../../data";
import { Separator } from "@/components/ui/separator";

const Faq = () => {
  return (
    <section className="p-14 flex items-center justify-center flex-col gap-6">
      <h3 className="text-primary font-bold text-2xl">Common Questions</h3>
      <Accordion type="single" collapsible className=" w-full lg:w-[800px]">
        {FAQ.map((query, index) => {
          return (
            <AccordionItem value={index + 1} key={index}>
              <AccordionTrigger className="font-medium text-lg">
                {query.q}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <span>{query.a}</span>
                <br />
                <a
                  className=" underline text-sm font-medium text-primary"
                  href="#"
                >
                  Learn more
                </a>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <Separator />
    </section>
  );
};

export default Faq;
