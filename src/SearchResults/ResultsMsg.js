import { memo } from 'react';
import { string } from 'prop-types';
import { Container, Row, Col } from '@bootstrap-styled/v4';

const ResultsMsg = ({
  message = ''
}) => (
  <Container>
    <Row>
      <Col>
        {message}
      </Col>
    </Row>
  </Container>
);

ResultsMsg.propTypes = {
  message: string,
};

export default memo(ResultsMsg);
