import "./styles.css";
import { Cloud } from "react-icon-cloud";
import styled from "styled-components";
import tools from "./tools";

export const Img = styled.img`
  object-fit: contain;
`;

export const A = styled.a`
  display: flex;
  flex-direction: column;
`;

export default function IconCloud() {
  return (
    <div className="App">
      <Cloud>
        {tools.map((item) => (
          <A key={item.name} title={item.name}>
            <Img src={item.icon} width="64" height="64" />
          </A>
        ))}
      </Cloud>
    </div>
  );
}