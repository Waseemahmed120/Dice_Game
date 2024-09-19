import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div>
        <img src="./Images/dices 1.png" alt="dice" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
    max-width: 1182px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content h1 {
        font-weight: 700px;
        font-size: 96px;
    }

    .content Button {
        display: flex;
        justify-content: center;
    }
`;
