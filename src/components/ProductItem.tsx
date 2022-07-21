import { CgShoppingBag } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { AddItem } from '../store/features/checkout/checkoutSlice';
import { IProduct } from '../store/features/products/productsSlice';
import {
  ButtonBuy,
  DivBuyIcon,
  DivBuyWrite,
  DivCard,
  DivDescription,
  DivImgProduct,
  DivNamePriceProduct,
  DivNameProduct,
  DivPriceProduct,
  ImgProduct,
} from '../styles/BodyStyled';

export const ProductsItem = (product: IProduct) => {
  const { name, description, photo, price } = product;
  const dispatch = useDispatch();

  return (
    <DivCard>
      <DivImgProduct>
        <ImgProduct src={photo}></ImgProduct>
      </DivImgProduct>
      <DivNamePriceProduct>
        <DivNameProduct>{name}</DivNameProduct>
        <DivPriceProduct>R$ {price}</DivPriceProduct>
      </DivNamePriceProduct>
      <DivDescription>{description}</DivDescription>
      <ButtonBuy type='button' onClick={() => dispatch(AddItem(product))}>
        <DivBuyIcon>
          <CgShoppingBag size={20} />
        </DivBuyIcon>
        <DivBuyWrite> Adicionar ao carrinho</DivBuyWrite>
      </ButtonBuy>
    </DivCard>
  );
};
