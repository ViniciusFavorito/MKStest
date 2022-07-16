import {
  ButtonDiv,
  CarrinhoButton,
  CarrinhoImg,
  CarrinhoValor,
  DivCarrinhoCompra,
  DivNavbarTitle,
  NavbarContainer,
  NavbarTitle,
  NavbarTitleSub,
} from '../styles/NavbarStyled';
import carrinho from '../../public/carrinho.png';
import { CarShop } from './CarShop';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { ToggleOpen } from '../store/features/checkout/checkoutSlice';

export function Navbar() {
  const checkout = useSelector((state: RootState) => state.checkout);
  const dispatch = useDispatch();

  return (
    <NavbarContainer>
      <DivNavbarTitle>
        <NavbarTitle>MKS</NavbarTitle>
        <NavbarTitleSub>Sistemas</NavbarTitleSub>
      </DivNavbarTitle>
      <DivCarrinhoCompra>
        <CarrinhoButton type='button' onClick={() => dispatch(ToggleOpen())}>
          <ButtonDiv>
            <CarrinhoImg src={carrinho}></CarrinhoImg>
            <CarrinhoValor>{checkout.amount}</CarrinhoValor>
          </ButtonDiv>
        </CarrinhoButton>
      </DivCarrinhoCompra>
      {checkout.open && <CarShop />}
    </NavbarContainer>
  );
}
