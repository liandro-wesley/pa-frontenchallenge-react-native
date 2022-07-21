import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.black900};
  `}
`;

export const CreatePost = styled.TouchableOpacity`
  ${({theme}) => css`
    background-color: ${theme.colors.accentColor};

    border-radius: 60px;
    width: 70px;
    height: 70px;

    font-size: 20px;

    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 15px;
    right: 15px;
  `}
`;
