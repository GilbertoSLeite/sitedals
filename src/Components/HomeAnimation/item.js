import { animated } from 'react-spring';
import styled from 'styled-components';

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
`

export default Item;