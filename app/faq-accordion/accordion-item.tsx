import Image from "next/image";
import type { JSX } from "react";

import minusIcon from "@/public/faq-accordion/icon-minus.svg";
import plusIcon from "@/public/faq-accordion/icon-plus.svg";

import type { AccordionItemData } from "./accordion";

interface AccordionItemProps {
  readonly handleClick: (index: number) => void;
  readonly isOpen: boolean;
  readonly item: AccordionItemData;
}

const AccordionItem = ({
  handleClick,
  isOpen,
  item,
}: AccordionItemProps): JSX.Element => (
  <li className="border-b border-b-(--light-pink) py-5 first:pt-0 last:border-b-0 last:pb-0 lg:py-6">
    <details open={isOpen}>
      <summary
        className="flex cursor-pointer items-center justify-between gap-4 leading-[1.2rem] font-semibold transition-colors hover:text-(--accordion-item-hover) lg:text-lg"
        onClick={(event_) => {
          event_.preventDefault();
          handleClick(item.index);
        }}
      >
        {item.title}
        {isOpen ? (
          <Image
            alt="Minus"
            aria-hidden
            className="h-auto w-7.5"
            height={31}
            src={minusIcon}
            width={30}
          />
        ) : (
          <Image
            alt="Plus"
            aria-hidden
            className="h-auto w-7.5"
            height={31}
            src={plusIcon}
            width={30}
          />
        )}
      </summary>
      {/* Wrapping with <div> to fix the awkward animation
            made by setting padding to the tag directly under the details */}
      <div className="overflow-hidden text-sm leading-[1.3rem] text-(--grayish-purple) lg:text-[16px] lg:leading-6">
        <p className="pt-6">{item.content}</p>
      </div>
    </details>
  </li>
);

export default AccordionItem;
