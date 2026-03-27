import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProcess, selectProcesses } from '../processes-slice';

export default function Processes() {
  const processes = useSelector(selectProcesses);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(addProcess(inputValue))}>Add</button>
      <ul>
        {processes.map((p) => (
          <Process name={p} />
        ))}
      </ul>
    </>
  );
}

function Process({ name }) {
  return <li>{name}</li>;
}
