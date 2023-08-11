import React from 'react';

import { getClassNames } from '~utils';

import s from './AsteroidIcon.module.css';

interface AsteroidIconProps {
  size: 'small' | 'large'
}

export function AsteroidIcon({ size }: AsteroidIconProps) {
  return <div className={getClassNames(s.icon, s[size])} />;
}
