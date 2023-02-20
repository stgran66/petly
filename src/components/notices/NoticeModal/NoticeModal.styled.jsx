import { styled } from '@mui/system';

const Container = styled('div')`
  position: relative;
  max-width: 400px;
  margin: 0px auto 30px;
  padding: 60px 15px 40px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 704px;
    margin: 0px auto 0px;
    padding: 32px 20px;
  }
`;
const Wrapper = styled('div')`
  & + p {
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 288px 356px;
    gap: 20px;
    margin-bottom: 28px;

    & + p {
      margin-bottom: 32px;
    }
  }
`;

const ImgWrapper = styled('div')`
  position: relative;
  width: 240px;
  height: 240px;

  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0 auto 16px auto;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 288px;
    height: 328px;
  }
`;
const Img = styled('img')`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Category = styled('span')`
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  min-width: 158px;
  padding-left: 20px;
  font-size: 12px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  background-color: #ffffff60;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ListWrapper = styled('div')`
  width: 100%;
`;

const Title = styled('h2')`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  word-wrap: break-word;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 90%;
    margin-bottom: 20px;

    font-size: 28px;
    line-height: 1.35;
  }
  color: ${props => props.theme.colors.text};
`;

const List = styled('ul')`
  margin-bottom: 28px;
  overflow: hidden;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Item = styled('li')`
  display: flex;
  hyphens: auto;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ItemInfo = styled('p')`
  min-width: 118px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  overflow: hidden;
  hyphens: auto;
  color: ${props => props.theme.colors.text};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 120px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

const ContLink = styled('a')`
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.text};
  overflow: hidden;
  word-wrap: break-word;

  transition: color ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const BtnWrapper = styled('div')`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 20px;
  }
`;

const ContactButton = styled('a')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.white};
  text-align: center;

  background-color: ${props => props.theme.colors.accent};
  border-radius: 40px;
  transition: background-color ${props => props.theme.transitions.normal};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 160px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: #ff6101;
  }
`;

const ChangeFavoriteStatusBtn = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.text};

  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;
  transition: border-color ${props => props.theme.transitions.long};
  background: ${props => props.theme.colors.white};

  & > svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;

    fill: ${props => props.theme.colors.accent};
    transition: fill ${props => props.theme.transitions.long};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 160px;
    margin-right: 12px;
  }

  &:hover,
  &:focus {
    border-color: #ff6101;

    & > svg {
      fill: #ff6101;
    }
  }
`;

const style = {
  Container,
  Wrapper,
  ImgWrapper,
  Img,
  Category,
  ListWrapper,
  Title,
  List,
  Item,
  ItemInfo,
  BtnWrapper,
  ContactButton,
  ChangeFavoriteStatusBtn,
  ContLink,
};

export default style;
