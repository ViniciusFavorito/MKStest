import { ButtonBuy, ContentBody, DivBody, DivBuyIcon, DivBuyWrite, DivCard, DivContent, DivDescription, DivImgProduct, DivNamePriceProduct, DivNameProduct, DivPriceProduct, DivSkeleton, ImgProduct } from '../styles/BodyStyled';
import { useEffect, useState } from "react";
import { apimks } from "../services/api";
import { Navbar } from "../components/Navbar";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ProductsItem } from '../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { IProduct, setProducts } from '../store/features/products/productsSlice';
import { Footer } from '../components/Footer';



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
            <DivBody  >
                <DivContent>
                    {
                        products.length > 0 ?
                            (
                                <>
                                    {products.map((product: IProduct) => <ProductsItem key={product.id} {...product} />)}
                                </>
                            ) : (
                                <>
                                    {Array(8).fill(1).map(() => (
                                        < DivSkeleton >
                                            < SkeletonTheme width={"180px"} baseColor="#c4c1c1" highlightColor="#9a9696">
                                                <Skeleton width="100%" height={150} style={{}} />
                                                <Skeleton width="100%" height={38} style={{ marginTop: "12px" }} />
                                                <Skeleton width="100%" height={25} style={{ marginTop: "8px" }} />
                                                <Skeleton width="100%" height={31} style={{ marginTop: "12px", }} />
                                            </SkeletonTheme>
                                        </DivSkeleton>
                                    ))}
                                </>
                            )
                    }
                </DivContent>
            </DivBody>
            <Footer />
        </>
    )
}