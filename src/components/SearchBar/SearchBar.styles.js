import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: var(--darkGrey);
    padding: 0 20px;

`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 40px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 8px;
        width: 24px;
    }

    input {
        font-size: var(--fontMed);
        position: absolute;
        left: 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        height: 40px;
        background: transparent;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;