import React from "react";

type LinkWaProps = {
  encode: string;
  telp: string;
  children: React.ReactNode;
};

const LinkWa = (props: LinkWaProps) => {
  return (
    <a
      href={`https://wa.me/${props.telp}?text=${props.encode}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit"
    >
      {props.children}
    </a>
  );
};

export default LinkWa;
