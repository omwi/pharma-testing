import { IoChevronDownOutline } from 'react-icons/io5';

import IconContainer from '../icon-container/icon-container';
import * as styles from './select.module.css';

export default function Select({ options, value, onChange }) {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      <button>
        <selectedcontent></selectedcontent>
        <IconContainer size={24}>
          <IoChevronDownOutline className={styles.chevron} />
        </IconContainer>
      </button>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
