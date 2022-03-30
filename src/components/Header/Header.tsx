// react

import { FC, useContext } from "react";
import { Context } from "../../contexts";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";

// styles

import { Container, Divison, Bage } from "./style.css";

// utils

import { handleChangeLang, handleChangeTheme, classTheme, iconTheme, langText, scrollItem } from "../../utils";

// types

import { IHeader } from "./types";

const Header: FC<IHeader> = ({ bage }) => {
    //
    const { theme, lang, langChange, themeChange } = useContext(Context);
    return (
        <Container>
            <Divison>
                <FontAwesomeIcon icon={faBagShopping} className="icon" />
                <Bage bage={bage}>{bage}</Bage>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => scrollItem(2100)} className="icon" />
            </Divison>
            <Divison>
                <FontAwesomeIcon icon={iconTheme(theme)} className={classTheme(theme)} onClick={() => handleChangeTheme(theme, themeChange)} />
                <span onClick={() => handleChangeLang(lang, langChange)} className="theme lang">
                    {langText(lang)}
                </span>
            </Divison>
        </Container>
    );
};
export default Header;
