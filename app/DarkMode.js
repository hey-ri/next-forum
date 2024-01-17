'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DarkMode({ modeVal }) {
  const [changeModeVal, setChangeModeVal] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (changeModeVal) {
      document.cookie = `mode=${changeModeVal}; max-age=${3600 * 24 * 400}`;
    }
  }, [changeModeVal]);

  return (
    <span
      style={{ cursor: 'pointer' }}
      onClick={() => {
        const newMode = modeVal === 'light' ? 'dark' : 'light';
        setChangeModeVal(newMode);
        router.refresh();
      }}
    >
      {modeVal == 'light' ? 'DarkMode' : 'LightMode'}
    </span>
  );
}
