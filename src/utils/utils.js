export const generateId = () => Number((Math.random() * 100).toFixed(0));

export const formatAmount = (amount) => {
  if (typeof amount !== 'number') {
    amount = Number(amount);
    if (isNaN(amount)) {
      return;
    }
  };
  const value = Number(amount);
  let formattedAmount = '0';

  if (!isNaN(value)) {
    formattedAmount = String(amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  // return `${'\u20A6'} ${formattedAmount}`;
  return `${'\NGN'} ${formattedAmount}`;
};
