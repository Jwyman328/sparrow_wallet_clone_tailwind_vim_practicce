export interface TransactionDetails {
  date: string;
  label: string;
  amount: string;
  balance: string;
}

export interface UtxoDetails {
  date: string;
  output: string;
  address: string;
  label: string;
  value: string;
}
