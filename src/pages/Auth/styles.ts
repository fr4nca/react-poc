import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    p {
      margin-top: 10px;
      font-size: 12px;
      color: #979797;

      a {
        color: #fff;
        margin-top: 15px;
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
