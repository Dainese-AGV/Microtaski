export const Rating = (props: any) => {
  if (props.value === 1) {
    return (
      <>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={true} />
        <Star selected={false} />
      </>
    );
  }
  if (props.value === 2) {
    return (
      <>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </>
    );
  }
  if (props.value === 3) {
    return (
      <>
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={true} />
        <Star selected={false} />
      </>
    );
  }

  return (
    <>
      <Star selected={false} /> 
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={true} />
    </>
  );
};

const Star = (props: any) => {
  if (props.selected === true) {
    return (
      
        <span>
          <b>star </b>
        </span>
     
    );
  } else {
    return <span>star </span>;
  }
};
