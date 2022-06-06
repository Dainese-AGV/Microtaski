type AccordionPropsType = {
  next: string;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <>
      <AccordionTitle next={props.next} />
      <AccordionBody />
    </>
  );
};

const AccordionTitle = (props: any) => {
  return <h3>{props.next}</h3>;
};

const AccordionBody = (props: any) => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
