import { ButtonBuy, ContentBody, DivBody, DivBuyIcon, DivBuyWrite, DivCard, DivContent, DivDescription, DivImgProduct, DivNamePriceProduct, DivNameProduct, DivPriceProduct, ImgProduct } from '../styles/BodyStyled';
import { useEffect, useState } from "react";
import { apimks } from "../services/api";
import { Navbar } from "../components/Navbar";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ProductsItem } from '../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { IProduct, setProducts } from '../store/features/products/productsSlice';



export function Home() {

    const products = useSelector((state: RootState) => state.products.data);
    const dispatch = useDispatch();


    useEffect(() => {
        apimks
            .get("/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
            .then((response) => {
                dispatch(setProducts(response.data.products))
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <Navbar />
            {
                products ?
                    (
                        <DivBody  >
                            <DivContent>
                                {products.map((product: IProduct) => <ProductsItem key={product.id} {...product} />)}
                            </DivContent>
                        </DivBody>
                    ) : (
                        < SkeletonTheme baseColor="#cc1414" highlightColor="#444">
                            <p>
                                <Skeleton count={3} />
                            </p>
                        </SkeletonTheme>
                    )
            }
        </>
    )
}