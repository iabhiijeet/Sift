"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import SectionHeading from "@/components/landing/SectionHeading";
import Reveal from "@/components/landing/Reveal";
import { faqs } from "@/lib/mock-data";
const MotionAccordionItem = motion.create(AccordionItem);

export default function FAQ() {
  return (
    <section id="faq" className="pb-20 sm:pb-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-20 max-w-5xl mx-auto">
          <SectionHeading
            align="left"
            eyebrow="A FEW THINGS YOU MIGHT BE WONDERING"
            title={
              <>
                Good questions.
                <br />
                <span className="serif text-primary">Clear answers.</span>
              </>
            }
            description="A little context before your next rabbit hole."
          />
          <Reveal>
            <Accordion multiple={false} defaultValue={[faqs[0].question]}>
              {faqs.map((f) => (
                <MotionAccordionItem layout key={f.question} value={f.question}>
                  <AccordionTrigger className="py-5 text-[13px] font-normal">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-xs text-muted-foreground leading-[1.9] pr-5"
                    >
                      {f.answer}
                    </motion.p>
                  </AccordionContent>
                </MotionAccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
