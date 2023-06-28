import React, { FC } from 'react';

interface Props {
  title: string
}

export const PageTitle: FC<Props> = ({ title }) => <h2 className="text-4xl font-medium uppercase">{title}</h2>
