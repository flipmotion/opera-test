import { memo, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Table,
  Tr,
  Tbody,
  Td
} from '@bootstrap-styled/v4';

const Transactions = ({ transactions = [] }) => (
  <Table bordered>
    <Tbody>
      {transactions.map(({ from, to, hash }, index) => (
        <Fragment key={hash}>
          <Tr>
            <Td>№</Td>
            <Td>{index + 1}</Td>
          </Tr>
          <Tr>
            <Td>from</Td>
            <Td>{from}</Td>
          </Tr>
          <Tr>
            <Td>to</Td>
            <Td>{to}</Td>
          </Tr>
          <Tr>
            <Td>hash</Td>
            <Td>{hash}</Td>
          </Tr>
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

Transactions.propTypes = {
  transactions: arrayOf(shape({
    from: string,
    to: string,
    hash: string,
  })),
};

export default memo(Transactions);
