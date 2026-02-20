"use client";

import type { JSX } from "react";
import { useState } from "react";

import AccordionItem from "./accordion-item";

export interface AccordionItemData {
  readonly content: string;
  readonly title: string;
}

interface AccordionProps {
  readonly items: AccordionItemData[];
}

const Accordion = ({ items }: AccordionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | undefined>(0);

  const handleClick = (index: number): void => {
    setOpenIndex((previous) => (index === previous ? undefined : index));
  };

  return (
    <ul className="flex list-none flex-col">
      {items.map((item, index) => (
        <AccordionItem
          handleClick={handleClick}
          index={index}
          isOpen={index === openIndex}
          item={item}
          key={item.title}
        />
      ))}
    </ul>
  );
};

export default Accordion;
