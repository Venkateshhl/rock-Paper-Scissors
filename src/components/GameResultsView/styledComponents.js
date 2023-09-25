import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
  margin-top: 70px;
  @media screen and (max-width: 576px) {
  width: 260px;
  height: 260px;
  margin-left: 16px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 576px) {
    width: 40%;
  }
`
export const ResultName = styled.p`
  color: white;
  font-size: 35px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const ResultText = styled.p`
  color: white;
  font-size: 30px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const ResultButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 20px;
  color: #223a5f;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-style: none;
  outline: none;
`

export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 1px;
    margin-right: 30px;
  }
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
