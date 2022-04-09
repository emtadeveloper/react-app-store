// react

import { FC, Fragment } from "react";

// components

import Footer from "../../components/footer";
import Header from "../../components/header";
import Nav from "../../components/nav";
import Title from "../../components/title";
import Product from "../../components/product";
import Description from "../../components/description";
import BtnAnboard from "../../components/description/btnAnboard";
import Question from "../../components/question";
import Box from "../../components/box";

// types

import { IHome } from "./../../types";

// helper

import { scrollItem } from "../../helper";

const Home: FC<IHome> = ({ header, footer, navBar, title_product, title_question, title_aboutUs, product, desc, question, boxes }) => {
    return (
        <>
            <Header {...header} />
            <Nav {...navBar} />
            {desc.map((item, index) => {
                const Props = { key: item.id, direction: item.direction, image: item.image, title: item.title, description: item.description };
                if (index === 0) {
                    return (
                        <Fragment key={item.id}>
                            <Description {...Props} children={<BtnAnboard btn={item.btn} scrollItem={scrollItem} />} />
                            <Title title={title_question} /> <Question {...question} /> <Box {...boxes} /> <Title title={title_product} />
                            <Product {...product} /> <Title title={title_aboutUs} />
                        </Fragment>
                    );
                } else {
                    return <Description {...Props} />;
                }
            })}
            <Footer {...footer} />
        </>
    );
};
export default Home;
