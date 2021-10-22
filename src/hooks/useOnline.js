import { useState, useEffect } from 'react';

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine);

  function offlineHandler() {
    setOnline(false);
  }

  function onlineHandler() {
    setOnline(true);
  }

  useEffect(() => {
    setOnline(navigator.onLine);
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return online;
}

export default useOnline;
