import { animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 5px rgba(34, 164, 181, 1);
  will-change: width, height;
`

export default Container;