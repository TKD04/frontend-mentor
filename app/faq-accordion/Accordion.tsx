import AccordionItem from "./AccordionItem";

export type AccordionItemData = {
  title: string;
  content: string;
};
type AccordionProps = {
  items: AccordionItemData[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <ul className="flex list-none flex-col">
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </ul>
  );
}
