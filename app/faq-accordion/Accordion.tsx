import AccordionItem from "./AccordionItem";

export type AccordionItemData = {
  content: string;
  title: string;
};
type AccordionProps = {
  items: AccordionItemData[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
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
}
