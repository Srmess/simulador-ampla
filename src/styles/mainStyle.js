import styled from "styled-components";
import backgroundimage from "../components/newComponents/imgs/fundoTitulo.png"


export const Divmain = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0px;


    position: relative;


    background: linear-gradient(119.07deg, rgba(0, 188, 181, 0.8) 0%, rgba(0, 92, 89, 0.8) 100%), url(${backgroundimage});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 450px) {
        padding: 16px;
        width: 450px;
    }
` 

export const Maincardstyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    gap: 72px;

    width: 882px;
    height: auto;

    background: rgba(255, 255, 255, 0.85);

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 24px;

    flex: none;
    order: 0;
    flex-grow: 0;

    @media (max-width: 400px) {
        width: 250px;
        height: auto;
    }
    @media (max-width: 500px) {
        width: 300px;
        height: auto;
    }
`

export const Divlogo = styled.div`

    img{
        width: 191px;
    }


`

export const Divtitleedescription = styled.div`
    margin-bottom: -30px;
    
    h1{
        text-align: center;

        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 42px;

        color: #454545;
    }

    h2{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #454545;
    }

    @media (max-width: 450px) {
        margin-top: -48px;
        
        h1{
            font-size: 35px;
            margin-bottom: 30px;
        }
        h2{
            font-size: 20px;
        }
    }
`

export const Divtitleteble = styled.div`    
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;

    color: #454545;

    margin-bottom: -50px;

    @media (max-width: 450px) {
        font-size: 35px;

        margin-bottom: -40px;
    }
`


