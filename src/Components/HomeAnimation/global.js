import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: #ffffff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default Global;

/*
#root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: #ffffff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
*/