"use client";

import type { JSX } from "react";
import { useState } from "react";

import AccordionItem from "./accordion-item";

export interface AccordionItemData {
  readonly content: string;
  readonly index: number;
  readonly title: string;
}

interface AccordionProps {
  readonly items: AccordionItemData[];
}

const Accordion = ({ items }: AccordionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | undefined>(0);

  const handleClick = (index: number): void => {
    if (index === openIndex) {
      setOpenIndex(undefined);

      return;
    }

    setOpenIndex(index);
  };

  return (
    <ul className="flex list-none flex-col">
      {items.map((item) => (
        <AccordionItem
          handleClick={handleClick}
          isOpen={item.index === openIndex}
          item={item}
          key={item.index}
        />
      ))}
    </ul>
  );
};

export default Accordion;
