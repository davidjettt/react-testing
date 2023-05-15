import * as React from 'react';

export interface IPersonProps {
    name: string
}

export default function Person ({name}: IPersonProps) {
  return (
    <div role='contentinfo'>
        Name is {name}
    </div>
  );
}
