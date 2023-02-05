import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0 20px 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 47px;

  background-color: ${props => props.theme.colors.commonBackground};
  font-family: 'Manrope';
`;

export const ContainerWrapp = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 18px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
`;

export const UserContainer = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};
`;
