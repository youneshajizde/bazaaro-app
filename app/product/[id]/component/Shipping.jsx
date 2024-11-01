import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import accordionImg from "@/public/assets/box1.webp";
function Shipping() {
  return (
    <div className="flex items-center gap-5">
      <Image src={accordionImg} width={300} height={300} alt="boxes" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>When do you get your box?</AccordionTrigger>
          <AccordionContent>
            Within 1 to 3 days maximum would be the time that Bazaaro needs to
            deliver your box.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is the shipping free?</AccordionTrigger>
          <AccordionContent>
            No. We raise a dollar on each product for the shipping process ,
            unless you live in manhattan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it reliable?</AccordionTrigger>
          <AccordionContent>
            Yes. We have an insurance policy for that specific thing!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Shipping;
