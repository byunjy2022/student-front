import React from 'react';
//import {ButtonToolbar,ButtonGroup, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <Link className="btn btn-outline-primary" bsSize="small" to="/">
        login
      </Link>
    </div>
  );
}
