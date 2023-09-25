import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 90%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 12px;
  background-color: transparent;
  margin-top: 3%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 30px;
  font-family: 'Bree Serif';
  margin-top: 1px;
  margin-bottom: 1px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 16%;
  height: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 29%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 23px;
  margin-bottom: 1px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 45px;
  margin-top: 1px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 25px;
    margin-top: 13px;
  }
`
