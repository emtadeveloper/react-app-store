// react

import { FC } from "react";

// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";

// styles

import { Container, Divison, Bage } from "./style.css";

// helper

import { classTheme, iconTheme, langText, scrollItem } from "../../helper";

// types

import { IHeader } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// hooks

import { useLangContext } from "../../hooks/useLangContext";
import { useThemeContext } from "../../hooks/useThemeContext";
import { useLangAction } from "../../hooks/uselangAction";
import { useThemeAction } from "../../hooks/useThemeAction";

const Header: FC<IHeader> = ({ bage }) => {
    //
    const lang = useLangContext();
    const theme = useThemeContext();
    const { changeTheme } = useThemeAction();
    const { changeLang } = useLangAction();

    return (
        <Container>
            <Divison>
                <FontAwesomeIcon icon={faBagShopping as IconProp} className="icon" />
                <Bage bage={bage}>{bage}</Bage>
                <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} onClick={() => scrollItem(2100)} className="icon" />
            </Divison>
            <Divison>
                <FontAwesomeIcon icon={iconTheme(theme)} className={classTheme(theme)} onClick={changeTheme} />
                <span onClick={changeLang} className="theme lang">
                    {langText(lang)}
                </span>
            </Divison>
        </Container>
    );
};
export default Header;
