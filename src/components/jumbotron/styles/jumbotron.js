import styled from 'styled-components/macro';

export const Item = styled.div`
    display:flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;


`;

export const Inner = styled.div`
    display:flex;
    align-items:center;
    flex-direction:${({direction}) => direction}
    justify-content: space-between;
    max-width:1100px;
    margin:auto;
    width:100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;


export const Container = styled.div`
    @media (max-width: 1000px){
        $(Item):last-of-type h2{
            margin-bottom: 50px;
        }
    }
`;

export const Pane = styled.div`
    width:50%;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Image = styled.img`
    height:100%;
    width:100%;
`;

