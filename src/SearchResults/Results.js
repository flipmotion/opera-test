import { memo } from 'react';
import { string } from 'prop-types';
import {
  Container,
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Transactions from './Transactions';

const Results = ({
  hash: blockHash,
  number,
}) => (
  <Container>
    <Row>
      <Col>
        <h4>
          Block: {number}
        </h4>
        <h4>
          Hash: {blockHash}
        </h4>
        <Transactions />
      </Col>
    </Row>
  </Container>
);

Results.propTypes = {
  blockHash: string,
  number: string,
};

export default memo(Results);
