import styled from 'styled-components';

export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const CardImage = styled.img`
  overflow: hidden;
  height: 200px;
`;

export const CardDate = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: grey;
`;

export const CardSubTitle = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: gray;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
`;

export const CardDescription = styled.p``;

export const CardButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  display: inline-block;
  border: none;
  text-align: center;
  padding: 15px 64px;
  text-decoration: none;
  font-size: 16px;
`;

export const CardContainer = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0 0 15px -5px;
  transition: 0.3s;
  animation: ease-in;
  border-radius: 10px;

  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px 0px;
  }
`;

export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
`;