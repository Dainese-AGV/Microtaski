type PropsTypeHeader = {
  title: string;
};

export const Header = (props: PropsTypeHeader) => {
  return <div>{props.title}</div>;
};
