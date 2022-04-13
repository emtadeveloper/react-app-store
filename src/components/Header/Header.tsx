// react

import { FC, useState } from "react";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";

// styles

import { Container, Divison, Bage, ContainerCard } from "./style.css";

// helper

import { classTheme, iconTheme, langText, scrollItem } from "../../helper";

// types

import { IconProp } from "@fortawesome/fontawesome-svg-core";

// hooks

import { useLangContext } from "../../hooks/useLangContext";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useLangAction } from "../../hooks/uselangAction";
import { useThemeAction } from "../../hooks/useThemeAction";
import { shallowEqual, useSelector } from "react-redux";
import BageCard from "./bageCard";
import { IHeader } from "./type";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Header: FC<IHeader> = ({ btnPayment, btnCart }) => {
    //
    const lang = useLangContext();
    const theme = useThemeContext();
    const token = useAuthContext();
    const { changeTheme } = useThemeAction();
    const { changeLang } = useLangAction();
    const state: any = useSelector((state) => state, shallowEqual);
    const bage = Object.keys(state.shopReducer.entities).length;
    const card = Object.keys(state.shopReducer.entities);
    const [visible, setVisible] = useState(false);
    const Navigate = useNavigate();

    const checkLogin = () => {
        !!token ? Navigate("/dashboard") : Navigate("/login");
    };

    return (
        <Container>
            <Divison>
                <FontAwesomeIcon
                    icon={faBagShopping as IconProp}
                    className="icon"
                    onClick={() => {
                        setVisible(!visible);
                    }}
                />
                <Bage
                    onClick={() => {
                        setVisible(!visible);
                    }}
                    bage={bage}
                >
                    {bage}
                </Bage>
                <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} onClick={() => scrollItem(2100)} className="icon" />
            </Divison>
            <Divison>
                <FontAwesomeIcon icon={iconTheme(theme)} className={classTheme(theme)} onClick={changeTheme} />
                <span onClick={changeLang} className="theme lang">
                    {langText(lang)}
                </span>
            </Divison>
            {visible && bage !== 0 && (
                <ContainerCard key="unique">
                    {card.map((item: any) => {
                        return <BageCard key={item} {...state.shopReducer.entities[item]} />;
                    })}
                    <button onClick={checkLogin}>{!!token ? btnCart : btnPayment}</button>
                </ContainerCard>
            )}
        </Container>
    );
};
export default Header;
