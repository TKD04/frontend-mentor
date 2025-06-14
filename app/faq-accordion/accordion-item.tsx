"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import type { KeyboardEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

import nextCofnig from "@/next.config";

const BASE_PATH = nextCofnig.basePath ?? "";
const animateOpenAccordion = (content: gsap.TweenTarget) =>
  gsap.fromTo(
    content,
    {
      height: 0,
      opacity: 0,
    },
    {
      duration: 0.4,
      ease: "power3.out",
      height: "auto",
      opacity: 1,
    },
  );
const animateCloseAccordion = (
  content: gsap.TweenTarget,
  element: HTMLDetailsElement,
) =>
  gsap.to(content, {
    duration: 0.4,
    ease: "power3.out",
    height: 0,
    onComplete: () => {
      element.removeAttribute("open");
    },
    opacity: 0,
    overwrite: true,
  });

export default function AccordionItem({
  content,
  isOpenDefault,
  title,
}: Readonly<{
  content: string;
  isOpenDefault: boolean;
  title: string;
}>) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const liReference = useRef<HTMLLIElement>(null);
  const detailsReference = useRef<HTMLDetailsElement>(null);
  const divReference = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: liReference });

  const handleClickItem = (event_: MouseEvent) => {
    event_.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleKeyDownItem = (event_: KeyboardEvent<HTMLElement>) => {
    if (!(event_.key === " " || event_.key === "Enter")) {
      return;
    }

    event_.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    contextSafe(() => {
      const detailsCurrent = detailsReference.current;
      const divCurrent = divReference.current;

      if (detailsCurrent === null || divCurrent === null) {
        throw new Error("detailsCurrent and divCurrent must not null");
      }
      if (isOpen) {
        detailsCurrent.setAttribute("open", "true");
        animateOpenAccordion(divCurrent).restart();
      } else {
        animateCloseAccordion(divCurrent, detailsCurrent).restart();
      }
    })();
  }, [contextSafe, isOpen]);

  return (
    <li
      className="border-b border-b-[var(--light-pink)] py-5 first:pt-0 last:border-b-0 last:pb-0 lg:py-6"
      ref={liReference}
    >
      <details ref={detailsReference}>
        <summary
          // Using "flex" to remove details-marker */}
          className="flex cursor-pointer items-center justify-between gap-4 leading-[1.2rem] font-semibold transition-colors hover:text-[var(--accordion-item-hover)] lg:text-lg"
          onClick={handleClickItem}
          // Using "onKeyDown" to fix "jsx-a11y/click-events-have-key-events"
          onKeyDown={handleKeyDownItem}
          // Using "role" and "tabIndex" to fix "jsx-a11y/no-static-element-interactions"
          role="button"
          tabIndex={0}
        >
          {title}
          {isOpen ? (
            <Image
              alt="Minus"
              aria-hidden
              className="h-auto w-[30px]"
              height={31}
              src={`${BASE_PATH}/faq-accordion/icon-minus.svg`}
              width={30}
            />
          ) : (
            <Image
              alt="Plus"
              aria-hidden
              className="h-auto w-[30px]"
              height={31}
              src={`${BASE_PATH}/faq-accordion/icon-plus.svg`}
              width={30}
            />
          )}
        </summary>
        {/* Wrapping with <div> to fix the awkward animation
            made by setting padding to the tag directly under the details */}
        <div
          className="overflow-hidden text-sm leading-[1.3rem] text-[var(--grayish-purple)] lg:text-[16px] lg:leading-6"
          ref={divReference}
        >
          <p className="pt-6">{content}</p>
        </div>
      </details>
    </li>
  );
}
