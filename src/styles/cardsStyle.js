import styled from "styled-components";
import iconreal from "../components/newComponents/imgs/icon-real.png"

export const Cardinputstyle = styled.div`
    display: flex;
    float: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    margin-right: 30px;
    gap: 16px;

    width: 460px;
    height: 120px;

    background-color: #FAFAFA;
    
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    h1{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;

        color: #454545;
    }

    input{
        box-sizing: border-box;

        display: flex;
        float: left;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        padding-left: 35px;
        gap: 4px;

        width: 266.46px;
        height: 40px;

        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        align-items: center;

        color: #454545;

        background: #FAFAFA;
        background-image: url(${iconreal});
        background-repeat: no-repeat;
        background-position-x: 10px;
        background-position-y: 50%;

        border: 1px solid #00bcb5;
        border-radius: 8px;

        flex: none;
        order: 0;
        flex-grow: 1;
        
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    button{
        display: flex;
        float: right;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 32px;

        margin-left: 15px;

        color: #ffff;
        
        gap: 8px;

        width: 115.54px;
        height: 40px;

        background: #00BCB5;

        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        border: none;

        cursor: pointer;
        :hover{
            background: #00BCC3;
        }
    }

    @media (max-width:450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 25px;

        width: 280px;
        height: 206px;

        h1{
            font-size: 35px;
            text-align: center;
            margin-bottom: 16px;
        }

        input{
            display: flex;
            float: none;
        }
        button{


            width: 115.54px;
            height: 40px;

            margin-top: 15px;
            margin-right: 28%;
            

        }
    }

`

export const Cardresultstyle = styled.div`
    display: flex;
    float: right;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;

    width: 250px;
    height: 122px;

    background: #FAFAFA;

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    flex: none;
    order: 1;
    flex-grow: 0;

    h1{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 32px;

        color: #454545;

        padding-right: 30px;
        
        span{
            font-size: 14px;
            line-height: 19px;
        }
    }

    h2{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 42px;
        display: flex;
        align-items: center;

        margin-top: -50px;
        padding-left: 50px;

        /* Turquesa Ampla */

        color: #00BCB5;
    }

    @media (max-width:450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 25px;

        width: 280px;
        height: 122px;


        h1{
            font-size: 28px;
            padding: 0px;
            span{
                font-size: 20px;
            }
        }
    }
`

export const Cardtablecostingstyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    margin-right: 25px;

    width: 500px;
    height: fit-content;

    background: #FAFAFA;

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    h1{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 26px;
        display: flex;
        align-items: center;

        /* Turquesa Ampla */

        color: #00BCB5;
    }

    table{
        display: table;

        width: 500px;
        height: 250px;

        text-align: center;
        
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #454545;

        margin-top: 10px;
    }

    #thead{
        display: table-header-group;

        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 19px;

        border-top: none;
        color: #454545;
    }

    tr{
        display: table-row;
        border-top: 1px solid #00BCB5;
    }

    td{
        display: table-cell;
        padding: 15px;
    }

    span{
        color: #00BCB5;
    }
    
    #lasttr{
        font-weight: bold;
    }

    #circle{
        position: absolute;
        margin-top: -8px;
        margin-left: -20px;
    }

    #cet{
        color: #00BCB5;
    }

    @media (max-width:450px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 0px;
        width: fit-content;
        margin-bottom: 20px;

        h1{
            font-size: 24px;
        }

        table{
            width: 330px;
            height: 281px;

            margin-top: 10px;
        }

        td{
            display: table-cell;

            padding-top: 15px;
        }
    }

`

export const CardtableInvestimentStyle = styled.div`
    display: flex;
    float: right;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin-right: 30px;


    width: fit-content;
    height: fit-content;

    background: #FAFAFA;

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 16px;

    h1{
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        align-items: center;

        color: #00BCB5;
    }

    table{
        display: table;

        width: 345px;
        height: 233px;

        text-align: center;
        
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        color: #454545;

        margin-top: 10px;
    }

    #thead{
        display: table-header-group;

            font-family: 'Red Hat Display';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 19px;

            border-top: none;
    }

    tr{
        display: table-row;
        border-top: 1px solid #00BCB5;
    }

    td{
        display: table-cell;

        padding: 12px;
    }

    span{
        color: #00BCB5;
    }

    #lasttr{
        font-weight: bold;
    }

    #circle{
        position: absolute;
        margin-top: -8px;
        margin-left: -20px;
    }

    #cet2{
        color: #00BCB5;
    }

    @media (max-width:450px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;

    width: 330px;
    height: auto;

    margin-bottom: 20px;

    table{
        width: 330px;
        height: 281px;


        margin-top: 10px;
    }
    
    td{
        display: table-cell;

        padding-top: 12px;
    }
    }
`