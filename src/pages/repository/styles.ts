import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    color: #A8A8B3;
    font-weight: bold;
    font-size: 16px;

    text-decoration: none;

    svg {
      margin-right: 8px;
    }
  }
`;

export const RepositoryInfoContainer = styled.div`
  margin-top: 80px;

  display: flex;
  align-items: center;

  figure {
    margin-right: 30px;
    img {
      width: 125px;
      height: 125px;
      border-radius: 50%;
    }
  }
  figcaption {
    strong {
      font-size: 36px;
      color: #3D3D4D;
    }
    p {
      font-size: 20px;
      color: #737380;
    }
  }
`;

export const RepositoryInfoNumbers = styled.ul `
  margin-top: 40px;

  display: flex;

  li {
    display: grid;

    & + li {
      margin-left: 80px;
    }
    strong {
      font-size: 36px;
      color: #3D3D4D
    }

    span {
      font-size: 20px;
      color: #6C6C80;
    }
  }
`;

export const Issues = styled.div `
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }
    
    &:hover {
      transform: translateX(10px);    
    }

    figcaption {
      strong {
        font-size: 20px;
        color: #3d3d4d;
        margin-right: 4%;
      }
      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 8px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`;