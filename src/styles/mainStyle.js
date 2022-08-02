import styled from "styled-components";

export const Divmain = styled.div`

    display: flex;

    align-items: center;
    justify-content: center;
    padding: 10px 0px;

    position: relative;

    @media (max-width: 450px) { 
        display: flex;
        justify-content: center;
        padding: 0px;
        width: auto;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
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

    @media (max-width: 400px) {
        width: 200px;
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
export const Divtabletaxes = styled.div`
    display: flex;
    align-items: center;
`

export const Divwarnings = styled.div`
    text-align: center;
    h1{
        margin-top: -25px;
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
    h2{
        margin-top: 15px;
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #454545;
    }

    span{
        color: #00BCB5;
    }
    @media (max-width: 450px) {
        h1{
            font-size: 19px;
        }
        h2{
            font-size: 20px;
        }

    }
`

export const Divbutton = styled.div`
    a{
        text-decoration: none;
    }

    button{
        display: flex;
        padding: 20px;
        align-items: center;

        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffff;

        background-color: #00BCB5;

        border: none;
        border-radius: 40px;
    
        cursor: pointer;

        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);

        :hover{
            background-color: #00DCCF;
            /* #005C59 */
        }
    }

    img{
        margin-right: 10px;
        width: 30px;
    }
`