export const formatHourRange = (hour) => {
  const startHour = hour.toString().padStart(2, '0');
  const endHour = (hour + 1).toString().padStart(2, '0');
  return `${startHour}-${endHour}`;
};

export const formatHourRangeFull = (hour) => {
  const startHour = hour.toString().padStart(2, '0');
  const endHour = (hour + 1).toString().padStart(2, '0');
  return `${startHour}.00-${endHour}.00`;
};

export const validateParams = (params, setParams) => {
  const date = params.get('tanggal')
  const epochRegex = /^\d{13}$/;
  const isEpochValid = epochRegex.test(date)
  const hour = params.get('jam')
  const hourRegex = /^[8-9]|1[0-9]|2[0-2]$/;
  const isHourValid = hourRegex.test(hour)
  const paymentMethod = params.get('metode_pembayaran')
  const isPaymentMethodValid = paymentMethod === 'POA' || paymentMethod === 'ONLINE'

  if(!isPaymentMethodValid || !isEpochValid || !isHourValid || !isPaymentMethodValid) {
    const newParams = new URLSearchParams(params.toString()); 
    if(!isEpochValid) newParams.delete('tanggal');
    if(!isHourValid) newParams.delete('jam');
    if(!isPaymentMethodValid) newParams.delete('metode_pembayaran');
    setParams(newParams);
  }

  const validValue = {
    date: null,
    hour: null,
    paymentMethod: null
  }
  if(isEpochValid) validValue.date = Number(date)
  if(isHourValid) validValue.hour = Number(hour)
  if(isPaymentMethodValid) validValue.paymentMethod = paymentMethod
  return validValue
}