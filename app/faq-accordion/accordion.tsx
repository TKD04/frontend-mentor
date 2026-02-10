import type { JSX } from "react";

import AccordionItem from "./accordion-item";

export type AccordionItemData = Readonly<{
  content: string;
  title: string;
}>;

const Accordion = ({
  items,
}: Readonly<{ items: AccordionItemData[] }>): JSX.Element => (
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
