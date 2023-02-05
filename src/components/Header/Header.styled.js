import styled from 'styled-components';

export const HeaderEl = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 16px;

  & nav {
    display: none;
    @media screen and (min-width: 1280px) {
      display: flex;
      align-items: center;
    }
  }
  & div {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
`;
export const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.logo.mobile};
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.Text};

  z-index: 1110;
  & span {
    color: ${({ theme }) => theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.logo.desktop};
  }
`;
