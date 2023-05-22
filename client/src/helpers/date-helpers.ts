export const dateToString = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export const formatInputDate = (date: string) => {
  const splitDate = date.split('-');
  return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
}

export const timeInputToSecs = (date: string) => {
  const splitDate = date.split(':');
  return Number(splitDate[0]) * 60 + Number(splitDate[1])
}

export const secsToMinsecs = (e: number) => {
  let h = Math.floor(e / 3600).toString().padStart(2,'0'),
      m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
      s = Math.floor(e % 60).toString().padStart(2,'0');
  if (m[0] === '0' && Number(h) < 1) {
    m = m[1];
  }
  if (Number(h) > 0) {
    return h + ':' + m + ':' + s;
  }
  return m + ':' + s;
}