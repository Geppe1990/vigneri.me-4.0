import React from "react"
import Menu from "./menu"
import styled from "styled-components";

const HEADER = styled.header`
    width: 100%;
`;

export default () => {
    return (
        <HEADER className="no-print">
            <Menu />
        </HEADER>
	)
}