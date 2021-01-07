import styled, { keyframes } from "styled-components";
import { animated } from "react-spring/renderprops";
import ls from '../../Files/iconspng.png';

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
function Circle() {
    styled(animated.div)`
  /*border: 4px solid ${props => props.color};*/
  border-radius: 50%;
`;
}

styled(Circle)`
  width: 200px;
  height: 200px;
  background-image: url(${ls});
  background-size: cover;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
  box-shadow: 0 0 40px 0px #fff;
`;
export default function AnimationLS() {
    styled(animated.div)`
  /*border: 4px solid ${props => props.color};*/
  border-radius: 50%;
`};