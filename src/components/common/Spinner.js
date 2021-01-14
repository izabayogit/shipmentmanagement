import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';

class Loader extends Component {
    render() {
        return (
            <div>
                <>

    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="sr-only">Loading...</span>
{' '}
  <span variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </span>
</>
            </div>
        );
    }
}

export default Loader;


