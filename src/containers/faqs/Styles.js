import styled from "styled-components/macro";

export const Container = styled.div`
  // border-bottom: 9px solid #070707;
  // display: flex;
`;
export const Entity = styled.div`
  border-bottom: 1px solid #d3d3d3;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  margin-left:2rem;
  &:first-of-type {
    margin-top: 1.5em;
  }
  &:last-of-type {
    border-bottom: 1px solid #fff;
  }
`;
export const Inner = styled.div`
  padding: 10px 40px;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #fff;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: #fff;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  margin-top: 2rem;
  font-size: 25px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 25px;
  }

  color: #274472;
`;