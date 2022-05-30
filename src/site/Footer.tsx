type PropsTypeFooter = {
  title: string;
};
export const Footer = (props: PropsTypeFooter) => {
  return <div>{props.title}</div>;
};
