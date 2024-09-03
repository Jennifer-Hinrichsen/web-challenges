import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";

// bonus2
// Define a styled container with flexbox
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName isBlack={false} />
      <BoxWithClassName isBlack={true} />
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </FlexContainer>
  );
}
