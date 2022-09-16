import * as React from "react";

interface Props {
  name: string;
  age: number;
  email: string;
  getName?: (name: string) => string;
}

export const Person = ({ name, email, age }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
    </div>
  );
};
