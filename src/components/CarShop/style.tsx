import styled from "styled-components"

export const ContainerCarShop = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    
    
`;

export const ContentCarShop = styled.div`
    width: 600px;
    background-color: #0f52ba;
    height: 100vh;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

`;

export const DivTitle = styled.div`
    width: 100%;
    display: flex;
`;

export const Titleh3 = styled.h3`
    color: white;
    margin-left: 30px;
    margin-top: 20px;
    font-size: 27px;
    font-weight: 300;
`;

export const ButtonClose = styled.button`
    width: 38px;
    justify-content: center;
    height: min-content;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 50%;
    background-color: black;
    color: white;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const DivButtonClose = styled.div`
    width: 100%;
    justify-content: end;
    display: flex;
    
`;

export const DivContentItems = styled.div`
    width: 100%;
    height: auto;
    margin-top:100px;
    padding: 0 40px 40px 40px ;
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const DivProductCarShop = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 100px;
    border-radius: 0.5rem;
`;

export const DivPhoto = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
`;

export const ImgItem = styled.img`
    display: flex;
    width: auto;
    height: 80px;
    margin-top: 10px;
`;

export const DivProductName = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const DivProductQtd = styled.div`
    width: 100%;
    display: flex;
`;

export const DivProductPrice = styled.div`
    width: 100%;
    display: flex;
    border-radius: 0.5rem;
    margin-left: 20px;
`;

export const DivQtd = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    margin: auto;
    border: 1px solid #BFBFBF;
    border-radius: 4px;
`;

export const BtnMin = styled.button`
    display: flex;
    background-color: transparent;
    cursor: pointer;
    border: solid;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: none;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InputCountProduct = styled.div`
    display: flex;
    background-color: white;
    cursor: pointer;
    border: solid;
    border-right: 0.5px solid #BFBFBF ;
    border-left: 0.5px solid #BFBFBF;
    border-top: none;
    border-bottom: none;
    width: 100%;
    justify-content: center;
    margin:4px 0 4px 0;
`;
export const BtnMax = styled.button`
    display: flex;
    background-color: transparent;
    cursor: pointer;
    border: none;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: none;
    width: 100%;
    justify-content: center;
    align-items: center;

`;


export const DivPriceCarShop = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    margin: auto;
    border: none;
    border-radius: 0.2rem;
    font-size: 20px;
`;

export const DivFinishPurchaseGeral = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const DivFinishPurchase = styled.button`
    display: flex;
    width: 100%;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size:28px;
    cursor: pointer;

`;


export const DivFinalPrice = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 25px;
    margin-top: auto;
    
`;

export const PTotal = styled.div`
    display: flex;
    width: 100%;
    color: white;
    justify-content: center;
    font-size: 28px

`;

export const PTotalValue = styled.div`
    display: flex;
    width:100%;
    color: white;
    justify-content: center;
    font-size: 28px
`;


export const DivFinal = styled.div`
    display: flex;
    width: 100%;
`;

export const BtnRemoveItem = styled.button`
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    color: white;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size:15px ;
    line-height: 17px;
    padding: 4px;
    margin-right: -5px;
    margin-top: -5px;
`;