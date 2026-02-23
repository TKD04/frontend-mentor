import Image from "next/image";
import type { JSX } from "react";

import minusIcon from "@/public/faq-accordion/icon-minus.svg";
import plusIcon from "@/public/faq-accordion/icon-plus.svg";

import type { AccordionItemData } from "./accordion";

interface AccordionItemProps {
  readonly handleClick: (index: number) => void;
  readonly index: number;
  readonly isOpen: boolean;
  readonly item: AccordionItemData;
}

const AccordionItem = ({
  handleClick,
  index,
  isOpen,
  item,
}: AccordionItemProps): JSX.Element => (
  <li className="border-b border-b-(--light-pink) py-5 first:pt-0 last:border-b-0 last:pb-0 md:py-6">
    <details open={isOpen}>
      <summary
        className="flex cursor-pointer items-center justify-between gap-4 leading-[1.2rem] font-semibold transition-colors hover:text-(--accordion-item-hover) md:text-lg"
        onClick={(event_) => {
          event_.preventDefault();
          handleClick(index);
        }}
      >
        {item.title}
        <Image
          alt={isOpen ? "Minus" : "Plus"}
          aria-hidden
          className="h-auto w-7.5"
          height={31}
          src={isOpen ? minusIcon : plusIcon}
          width={30}
        />
      </summary>
      <div className="overflow-hidden">
        <p className="pt-6 text-sm leading-[1.3rem] text-(--grayish-purple) md:text-[16px] md:leading-6">
          {item.content}
        </p>
      </div>
    </details>
  </li>
);

export default AccordionItem;
