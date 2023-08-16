import { getClassName } from '~utils/helpers';

import s from './AsteroidIcon.module.css';

interface AsteroidIconProps {
  size: 'small' | 'large'
}

export function AsteroidIcon({ size }: AsteroidIconProps) {
  return <div className={getClassName(s.icon, s[size])} />;
}
