import { ReactElement } from 'react';
import Accordion from '../Faq';
import faqsData from '../../fixtures/faqs.json';
import { AccordionItem } from '../Faq/AccordionItem';
import { FAQ } from '../../constants/context';

export const Faq = (): ReactElement => (
  <div>
    <Accordion className="block bg-blue-backgroundLight border-b-2 border-purple-dark">
      <Accordion.Title className="flex self-center text-center p-5">{FAQ.TITLE}</Accordion.Title>

      <Accordion.Frame>
        {faqsData.map((item) => (
          <AccordionItem
            key={item.id}
            className="w-full border-b-2 border-purple-dark"
            title={item.header}
            content={item.body}
          />
        ))}
      </Accordion.Frame>
    </Accordion>
  </div>
);
