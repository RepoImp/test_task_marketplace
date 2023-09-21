import styled from 'styled-components';

export const Container =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #f6f6f6;
    border-radius: 4px;
    width: 325px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
`

export const Image = styled.img`
    width: 40px;
`

export const SideInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;

`;

export const Title = styled.div`
    color: #6e6f71;
    font-size: 20px;
    font-weight: 600;
`

export const SubTitle = styled.div`
    color:  #6e6f71;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
`

export const Icon = styled.div`
    font-size:2rem;
    cursor: pointer;
    ${({color}) => {
        return `
            color: ${color};
        `
    }}
`