// icons

import { faHeadset, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// types

import { IHome, ILogin, IDash, INotFound } from "./../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const faHome: IHome = {
    header: { btnPayment: "پرداخت نهایی ", btnCart: "مشاهده سبد خرید" },
    navBar: {
        btnDash: "داشبورد",
        btnLogin: "ورود",
        home: "خانه",
        product: "محصولات",
        aboutMe: "درباره ما",
        finish: "پایان",
    },
    desc: [
        {
            id: 1,
            direction: false,
            image: require("./../images/blob.png"),
            title: "بهترین فروشگاه اینترنتی",
            description: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
            btn: "مشاهده محصولات",
        },
        {
            id: 2,
            direction: true,
            image: require("./../images/notes.png"),
            title: "تجربه ای شیرین با خرید اینترنتی",
            description: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
        },
        {
            id: 3,
            direction: true,
            image: require("./../images/friends.png"),
            title: "شروع داستان ما ",
            description: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
        },
        {
            id: 4,
            direction: false,
            image: require("./../images/game.png"),
            title: "جهانی شدن ما",
            description: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
        },
        {
            id: 5,
            direction: true,
            image: require("./../images/team.png"),
            title: "ما برای شما چکار میتونیم بکنیم",
            description: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد`,
        },
    ],
    product: {
        error: "اتصال به اینترنت را بررسی کنید",
        sorrySearch: " ): متاسفم چیزی پیدا نشد",
        isLoading: ".... درحال دریافت اطلاعات",
        search: "  دنبال چی میگردی ؟ لطفا انگلیسی تایپ کنید   ",
        modal: { back: "برگشت ", addCard: "اضافه به سبد خرید" },
        filterProduct: {
            all: "همه",
            womens: "لباس زنانه",
            mens: "لباس مردانه",
            electronics: "لوازم الکترونیکی",
            jewelery: "بدلیجات",
        },
    },
    boxes: {
        box: [
            {
                id: 1,
                title: "وظایف ما",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
            },
            {
                id: 2,
                title: "مسابقات",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ",
            },
            {
                id: 3,
                title: "جشواره های سالانه",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ",
            },
            {
                id: 4,
                title: "تخفیفات",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
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
    footer: {
        news: {
            title: "عضویت در خبرنامه",
            description: "جدید ترین اخبار آموزشگاه را با عضویت در خبرنامه ما دریافت بکنید",
            send: "ارسال",
            email: "لطفا ایمیل خود راوارد کنید",
        },
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
        number: "09154144503",
        email: "emta137671@gmail.com",
        copy: "تمام حقوق مادی و معنوی این سایت متعلق به تیم برنامه نویسی ما می باشد",
        map: " تهران - ولیعصر کوچه حسینی بن بست  لاله پلاک 22  ساختمان عشق",
    },
    question: {
        fag: [
            { title: "پشتیبانی 24 ساعته ", description: "پشتیبانی 24 ساعته در تمام ایام هفته بصورت رایگان", icon: faHeadset as IconProp },
            { title: "ارسال به سراسر کشور ", description: "پشتیبانی 24 ساعته در تمام ایام هفته بصورت رایگان", icon: faTruck as IconProp },
            { title: "مورد تایید از مراجع قانونی  ", description: "پشتیبانی 24 ساعته در تمام ایام هفته بصورت رایگان", icon: faQuestionCircle as IconProp },
        ],
        tabs: [
            { title: "آیا این خرید برای من مفید است؟", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و با استفاده از طراحان گرافیک است" },
            { title: "اصالت کالا تضمین شده است", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و با استفاده از طراحان گرافیک است" },
            { title: "پشتیبانی از محصولات", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و با استفاده از طراحان گرافیک است" },
            { title: "پشتیبانی از خریداران به چه صورت است ؟", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و با استفاده از طراحان گرافیک است" },
            { title: "آیا امکان بازگشت وجه وجود دارد ؟ ", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و با استفاده از طراحان گرافیک است" },
        ],
    },
    title_product: "محصولات",
    title_question: "سوالات",
    title_aboutUs: "درباره ما",
};

export const faLogin: ILogin = { toastMessage: " متاسفانه مشکلی داریم لطفا اتصال به اینترنت رو بررسی کنید ", back: "برگشت", btn: "ورود", login: "ورود به سایت" };

export const faDash: IDash = {
    logout: "خروج از حساب",
    back: "برگشت",
    empty: "سبدخرید شما خالی است",
    total: "جمع نهایی",
};

export const faNotFound: INotFound = { NotFound: "صفحه یافت نشد", btn: "بازگشت به خانه" };
