import { useSelector } from 'react-redux';
import { getTransactions } from '../../store';
import Transactions from './Component';

const Container = () => {
  const transactions = useSelector(getTransactions);
  const hasTransactions = Boolean(transactions.length);

  return (
    <>
      {!hasTransactions && <div>no any transactions in this block</div>}
      {hasTransactions && (
        <Transactions transactions={transactions} />
      )}
    </>
  );
}

export default Container;
