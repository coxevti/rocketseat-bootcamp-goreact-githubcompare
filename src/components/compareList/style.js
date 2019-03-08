import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Repository = styled.div`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Roboto');
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
    }
    strong {
      font-size: 26px;
      margin-top: 10px;
      text-transform: capitalize;
      font-family: 'Roboto', sans-serif;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      font-family: 'PT Sans', sans-serif;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
        margin-left: 5px;
      }
      &:nth-child(2n -1) {
        background: #f5f5f5;
      }
    }
  }
`;
