import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }

  li {
    background-color: #ff0000;

    @media screen and (max-width: 767px) {
      width: 100%;
      max-width: 280px;
      height: 192px;
    }

    @media screen and (min-width: 768px) {
      height: 246px;
      flex-basis: calc((100%) / 2 - 16px);
      max-width: 336px;
    }

    @media screen and (min-width: 1280px) {
      height: 287px;
      flex-basis: calc((100%) / 2 - 16px);
    }
  }
`;

const StyledContainer = styled.div`
  text-align: center;

  h2 {
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontSizes.headers.xs};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;

const styles = { StyledList };

export default styles;
