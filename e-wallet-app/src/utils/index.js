// formats the number that is used in the Transfer and Home Page
export function formatNumber(number) {
  return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
}


// finds the account from the values of the dummy data in local storage 
export function findAccount(number) {
  const users = JSON.parse(localStorage.getItem('users'));
  for (const user of users) {
    if (user.number === number) {
      return user;
    }
  }
  return false;
}


// gets the Date today for use in the transaction history
export function getDateToday() {
  const transDate = new Date();
  return `${transDate.toLocaleString('en-us', {
    month: 'long',
  })} ${transDate.getDay()}, ${transDate.getFullYear()}`;
}
