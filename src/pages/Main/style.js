import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  .msgError {
    display: ${props => (props.withError ? 'inline' : 'none')};
    margin-top: 20px;
    text-align: center;
    color: #fff;
    width: 100%;
    max-width: 400px;
    padding: 10px 20px;
    border: 1px dashed #fff;
  }
`;

export const Form = styled.form`
  margin-top: 25px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    border-radius: 30px 0px 0px 30px;
    color: #333;
    border: 0;
  }

  button {
    width: 70px;
    height: 50px;
    padding: 0 20px;
    background: #f3f3f3;
    border: 0;
    font-size: 18px;
    border-radius: 0px 30px 30px 0px;
    color: #333;
    &:hover {
      cursor: pointer;
      background: #ccc;
      color: #fff;
    }
  }
`;
