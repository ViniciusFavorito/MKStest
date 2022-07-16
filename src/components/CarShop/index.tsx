import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  AddItem,
  RemoveItem,
  SubtractItem,
  ToggleOpen,
} from '../../store/features/checkout/checkoutSlice';
import {
  BtnMax,
  BtnMin,
  BtnRemoveItem,
  ButtonClose,
  ContainerCarShop,
  ContentCarShop,
  DivButtonClose,
  DivContentItems,
  DivFinal,
  DivFinalPrice,
  DivFinishPurchase,
  DivFinishPurchaseGeral,
  DivPhoto,
  DivPriceCarShop,
  DivProductCarShop,
  DivProductName,
  DivProductPrice,
  DivProductQtd,
  DivQtd,
  DivTitle,
  ImgItem,
  InputCountProduct,
  PTotal,
  PTotalValue,
  Titleh3,
} from './style';

export function CarShop() {
  const checkout = useSelector((state: RootState) => state.checkout);
  const dispatch = useDispatch();

  return (
    <ContainerCarShop>
      <ContentCarShop>
        <DivTitle>
          <Titleh3>Carrinho de Compras</Titleh3>
          <DivButtonClose>
            <ButtonClose onClick={() => dispatch(ToggleOpen())}>X</ButtonClose>
          </DivButtonClose>
        </DivTitle>
        <DivContentItems>
          {checkout.items.map((product) => {
            const { amount, name, photo, id, price } = product;
            return (
              <DivProductCarShop key={id}>
                <DivPhoto>
                  <ImgItem src={photo}></ImgItem>
                </DivPhoto>
                <DivProductName>{name}</DivProductName>
                <DivProductQtd>
                  <DivQtd>
                    <BtnMin type='button' onClick={() => dispatch(SubtractItem(product))}>
                      -
                    </BtnMin>
                    <InputCountProduct>{amount}</InputCountProduct>
                    <BtnMax type='button' onClick={() => dispatch(AddItem(product))}>
                      +
                    </BtnMax>
                  </DivQtd>
                </DivProductQtd>
                <DivProductPrice>
                  <DivPriceCarShop>R$ {Number(price) * amount}</DivPriceCarShop>
                </DivProductPrice>
                <BtnRemoveItem type='button' onClick={() => dispatch(RemoveItem(product))}>
                  X
                </BtnRemoveItem>
              </DivProductCarShop>
            );
          })}
        </DivContentItems>
        <DivFinalPrice>
          <DivFinal>
            <PTotal>Total:</PTotal>
            <PTotalValue>R${checkout.totalPrice}</PTotalValue>
          </DivFinal>
        </DivFinalPrice>
        <DivFinishPurchaseGeral>
          <DivFinishPurchase>Finalizar Compra</DivFinishPurchase>
        </DivFinishPurchaseGeral>
      </ContentCarShop>
    </ContainerCarShop>
  );
}
