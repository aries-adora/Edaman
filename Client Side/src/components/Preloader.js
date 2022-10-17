
import React from 'react';
import { Image } from 'react-bootstrap';

import ReactLogo from "../assets/react-logo-transparent.svg";

export default (props) => {

  const { show } = props;

  return (
    <div>
      <Image src={ReactLogo} height={40} />
    </div>
  );
};
