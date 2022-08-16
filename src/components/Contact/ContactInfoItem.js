import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  overflow-x: hidden; 
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  .icon {
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    svg {
        width: 1.5rem;
        height: 1.5rem;
      }
      .icon {
        padding: 0.5rem;
      }
  }
`;

export default function ContactInfoItem({
    link = '#',
    working = "return false;",
    icon = <MdPlace />,
    text = 'I need text ',
}) {
    return (
        <ItemStyles>
            <div className="icon"><a href={link} target="_blank" rel="noreferrer">{icon}</a></div>
            <div className="info">
                <PText>{text}</PText>
            </div>
        </ItemStyles>
    );
}