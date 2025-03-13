import React from 'react';


interface HeadingProps {
  bubleColor?: string;
  children: React.ReactNode;
}

const Heading = ({ bubleColor, children }: HeadingProps) => {
  return (
    <h1 className="heading" data-buble-color={bubleColor}>
      {children}
    </h1>
  );
};

export default Heading;
