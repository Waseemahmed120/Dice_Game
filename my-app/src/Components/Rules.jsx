import styled from "styled-components";


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number.</p>
            <p>Click on dice image.</p>
            <p>
                After click on dice if slected number is equal to dice number, you will get same points as dice.{" "}
            </p>
            <p>If you get wrong guess then you 2 points will be deducted.</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffaeae;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;