import type { JSX } from "react";

import AccordionItem from "./accordion-item";

export interface AccordionItemData {
  readonly content: string;
  readonly title: string;
}

interface AccordionProps {
  readonly items: AccordionItemData[];
}

const Accordion = ({ items }: AccordionProps): JSX.Element => (
  <ul className="flex list-none flex-col">
    {items.map((item, index) => (
      <AccordionItem
        content={item.content}
        isOpenDefault={index === 0}
        key={item.title}
        title={item.title}
      />
    ))}
  </ul>
);

export default Accordion;
