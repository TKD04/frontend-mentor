import AccordionItem from "./accordion-item";

export type AccordionItemData = Readonly<{
  content: string;
  title: string;
}>;

export default function Accordion({
  items,
}: Readonly<{ items: AccordionItemData[] }>) {
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
