type PropsTypeBody = {
  title: number;
};

export const Body = (props: PropsTypeBody) => {
  return <div>{props.title}</div>;
};
