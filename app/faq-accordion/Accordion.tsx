import AccordionItem from "./accordion-item";

export interface AccordionItemData {
  content: string;
  title: string;
}
interface AccordionProperties {
  items: AccordionItemData[];
}

export default function Accordion({ items }: AccordionProperties) {
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
