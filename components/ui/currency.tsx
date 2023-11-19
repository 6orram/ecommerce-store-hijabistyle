"use client";

import { useEffect, useState } from "react";

// Assuming you have a formatter module

export const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'MAD',
});


interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
  value = 0
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="font-semibold">
      {formatter.format(Number(value))}
    </div>
  );
}

export default Currency;
