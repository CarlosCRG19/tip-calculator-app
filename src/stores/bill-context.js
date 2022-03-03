import React, { createContext, useContext, useState } from 'react';

const BillContext = createContext();

const INITIAL_STATE = {
  initialBill: '0',
  initialTip: '10',
  initialNumberOfPeople: '1',
};

const BillProvider = ({ children, initialState = INITIAL_STATE }) => {
  const { initialBill, initialTip, initialNumberOfPeople } = initialState;

  const [bill, setBill] = useState(initialBill);
  const [tip, setTip] = useState(initialTip);
  const [numberOfPeople, setNumberOfPeople] = useState(initialNumberOfPeople);

  const isInitialState = () => {
    return bill === initialBill && tip === initialTip && numberOfPeople === initialNumberOfPeople;
  };

  const resetBill = () => {
    setBill(initialBill);
    setTip(initialTip);

    setNumberOfPeople(initialNumberOfPeople);
  };

  const value = {
    bill,
    setBill,
    tip,
    setTip,
    numberOfPeople,
    setNumberOfPeople,
    resetBill,
    isInitialState: isInitialState(),
  };

  return <BillContext.Provider value={value}>{children}</BillContext.Provider>;
};

const useBill = () => {
  const context = useContext(BillContext);

  if (context === undefined) {
    throw new Error('useBill must be used withing a BillProvider');
  }

  return context;
};

export { BillProvider, useBill };
