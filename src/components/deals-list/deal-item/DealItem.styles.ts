import styled from "styled-components";

import * as colors from "@deal/theme/colors";
import * as typo from "@deal/theme/typography";
import * as variables from "@deal/theme/variables";

interface ILabelProps {
  new: {color: string, background: string},
  started: { color: string, background: string },
  assigned_to: { color: string, background: string },
  completed: { color: string, background: string }
  declined: { color: string, background: string },
}

const  labelColors:ILabelProps = {
  new: { color: colors.white, background: colors.alert },
  started: { color: colors.white, background: colors.progress },
  assigned_to: { color: colors.white, background: colors.assigned },
  completed: { color: colors.white, background: colors.completed },
  declined: { color: colors.white, background: colors.canceled },
}

export const DealBackColor = styled.div<{status:keyof ILabelProps}>`
  position: absolute;
  left: .3rem;
  height:101%;
  width: 1rem;
  top: -.1rem;
  border-radius:   ${colors.border} 0 0 ${colors.border} ;
  ${ props => labelColors[props.status]};
  z-index: -1;
  transition: 1s;
`;
export const DealItemWrapper = styled.div`
  display: grid;
  grid-template-columns:  ${variables.gridDeals};
  background: ${colors.white};
  margin: .4rem 0;
  padding: 1rem;
  color: ${colors.textPrimary};
  border-radius: ${colors.border};
  min-height: 5rem;
  border: .1rem solid ${colors.gray2};
  cursor: pointer;
  position: relative;
  transition: .2s;
  :hover ${DealBackColor}{
    transition: .3s;
    transform: translateX(-1rem);
  }
  :hover{
    transform: translateX(.9rem);
  }
`;



export const DetailItemTd = styled.div<{mw?:number}>`
  display: flex;
  ${props => props.mw && `min-width: ${props.mw}rem` };
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  padding: .4rem 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  :hover{
    
  }
`;

export const Title = styled.h3`
  ${typo.TITLE_R};
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: ${colors.textPrimary};
`;

export const SubTitle = styled.p`
  ${typo.TEXT_R};
  margin-top: .3rem;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: ${colors.textSecondary};
`;

export const DealImportant = styled.div`
  width: 5rem;
`;

export const SubTitleTime = styled.div`
  ${typo.LABEL_R};
  display: flex;
  align-items: center;
  color: ${colors.textSecondary};
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  svg{
    margin-right: .2rem;
  }
`;

export const Label = styled.div<{status:keyof ILabelProps, circle: boolean}>`
  ${typo.LABEL_R};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.circle ? `2.2rem` : `100%`};
  text-align: center;
  height: 2.2rem;
  border-radius: ${colors.border};
  ${ props => labelColors[props.status]};
  padding: .5rem;
`;