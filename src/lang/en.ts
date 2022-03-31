// icons

import { faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// types

import { lang_Home, lang_Login, lang_Dash, lang_NotFound } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const enHome: lang_Home = {
    navBar: {
        btn: "login",
        home: "Home",
        product: "Product",
        aboutMe: "AboutMe",
        finish: "finish",
    },
    desc: [
        {
            id: 6,
            direction: false,
            image: require("./../images/blob.png"),
            title: "The best online store",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
            btn: "view products",
        },
        {
            id: 7,
            direction: true,
            image: require("./../images/notes.png"),
            title: "A sweet experience with online shopping",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
        },
        {
            id: 8,
            direction: true,
            image: require("./../images/friends.png"),
            title: "The beginning of our story",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
        },
        {
            id: 9,
            direction: false,
            image: require("./../images/game.png"),
            title: "Our globalization",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
        },
        {
            id: 10,
            direction: true,
            image: require("./../images/team.png"),
            title: "What can we do for you ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
        },
    ],
    boxes: {
        box: [
            {
                id: 1,
                title: "Our duties",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications",
            },
            {
                id: 2,
                title: "Competitions",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications are aimed at improving practical tools",
            },
            {
                id: 3,
                title: "Annual festivals",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology",
            },
            {
                id: 4,
                title: "discount",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the ",
            },
        ],
        box_image: [
            { id: 1, image: require("./../images/bridge.png"), alt: "bridge" },
            { id: 2, image: require("./../images/working.png"), alt: "working" },
            { id: 3, image: require("./../images/workers.png"), alt: "workers" },
            { id: 4, image: require("./../images/converstion.png"), alt: "converstion" },
        ],
        activeBoxes: 1,
    },
    product: {
        sorrySearch: " ):  Sorry nothing was found ",
        isLoading: "  ..... Receiving information",
        search: "?  What are you looking for ",
        modal: { back: "back ", addCard: "add to card" },
        filterProduct: {
            all: "All",
            womens: "women's clothing",
            mens: "men's clothing",
            electronics: "electronics",
            jewelery: "jewelery",
        },
    },
    footer: {
        news: {
            title: "subscribe to newsletter enter your Email",
            description: "Receive the latest school news by subscribing to our newsletter",
            send: "send",
            email: "please enter email",
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications",
        number: "09154144503",
        email: "emta137671@gmail.com",
        copy: "All material and intellectual rights of this site belong to our programming team",
        map: "Tehran - Valiasr Hosseini Alley Laleh dead end No. 22 Eshgh Building",
    },
    question: {
        fag: [
            { title: "24-hour support", description: "24-hour support all days of the week for free", icon: faHeadset as IconProp },
            { title: "Send nationwide", description: "24-hour support all days of the week for free", icon: faTruck as IconProp },
            { title: "Approved by legal authorities ", description: "24-hour support all days of the week for free", icon: faQuestionCircle as IconProp },
        ],
        tabs: [
            { title: "Is this purchase useful for me?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications" },
            { title: "The authenticity of the goods ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications" },
            { title: "Product support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications" },
            { title: "How is buyer support?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications" },
            { title: "Is it possible to get a refund? ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Printers and texts but also newspapers and magazines in columns and rows as needed and for the circumstances  The current technology requirements and diverse applications" },
        ],
    },

    title_product: "product",
    title_question: "question",
    title_aboutUs: "Abou Us",
};

export const enLogin: lang_Login = { back: "back", btn: "login", login: "sign in " };

export const enDash: lang_Dash = {
    back: "back",
    btn: "Final settlement",
    empty: "Your shopping cart is empty ",
    total: "total sum",
};

export const enNotFound: lang_NotFound = { NotFound: "NotFoundPage", btn: "back Home" };
