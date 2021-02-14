import { memo } from 'react';
import { func, bool, string } from 'prop-types';
import { Container, Row, Col, Button, Input, Form, FormGroup, Label } from '@bootstrap-styled/v4';

const Component = ({
  onChange,
  onSubmit,
  onKeyPress,
  inputValue,
  isLoading,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form inline>
            <FormGroup className="mr-2">
              <Label>Block number</Label>
              <Input
                type='text'
                value={inputValue}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </FormGroup>
            <Button
              color='primary'
              type='button'
              onClick={onSubmit}
              disabled={isLoading}
            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

Component.propTypes = {
  onChange: func,
  onSubmit: func,
  onKeyPress: func,
  inputValue: string,
  isLoading: bool,
};

export default memo(Component);
