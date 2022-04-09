import { createGlobalStyle } from "styled-components";
import { IGlobal } from "./types";
import { directionText } from "./share";
export default createGlobalStyle<{ theme: IGlobal }>`

*{
   border: none;
   outline: none;
   list-style: none;
   margin: 0;
   padding: 0;
   font-family: IRANSans;
   font-weight: lighter;
 }

html {
    z-index: -4;
    font-size: 10px;
    direction: ${(props) => (props.theme.lang === "EN" ? "rtl" : "ltr")};
    background-color: ${(props) => props.theme.main.primaryColor}
}

::-webkit-scrollbar {
     width:0;
 }

 body{
   margin: 2vh 8vh;
   overflow-x: hidden;
   @media only screen and (max-width: 1280px) {
    margin: 2vh 4vh;
  }
   @media screen and (max-width : 950px) {
   margin: 4vh 
   }
 }
 
 li {
   font-size: 2rem;
   @media screen and (max-width : 950px) {
    font-size: 1.2rem;
   }
   @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 481px) {
         font-size:1.2rem;
        }
 }

 p{
   ${directionText};
  margin: 4rem 0;
  color: ${(props) => props.theme.text.primary};
  font-size: 1.8rem;
  @media only screen and (max-width:1200px) {
    font-size: 1.6rem;   
  }
  @media only screen and (max-width: 950px) {
    font-size: 1.4rem;   margin: 2rem 0;
  }
  @media only screen and (max-width: 850px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width:670px) {
     margin: 2rem 0;   font-size: 1.2rem;
        }
}

h1{
  font-size:10rem;
  color: ${(props) => props.theme.fix.green};
  @media only screen and (max-width: 1050px) {
    font-size: 8rem;
  }
  @media only screen and (max-width:670px) {
         font-size: 6rem;

        }
}

h2{
  width: 100%;
  ${directionText};
  font-size: 2.4rem;
  color: ${(props) => props.theme.fix.green};
  @media only screen and (max-width: 1050px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width:670px) {
         font-size: 1.6rem;
        }
}

h3{
  width: 100%;
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 481px) {
    text-align: center;
         font-size:1rem;
        }
}

h4{
  font-size: 1.8rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 481px) {
         font-size:1.4rem;
        }
}

h5{
  font-size:2.6rem;
  margin-bottom: .5rem;
  @media only screen and (max-width:1100px) {
    font-size:2rem;
  }
  @media only screen and (max-width:950px) {
    font-size:1.8rem;
  }
  @media only screen and (max-width: 481px) {
         font-size:1.6rem;
        }
}

h6{
  font-size:1.6rem;
  margin-bottom: .5rem;
  @media only screen and (max-width:768px) {
    font-size:1.2rem;
  }
  @media only screen and (max-width:481px) {
         font-size:1rem;
        }
}

span{
  font-size: 1.6rem;
  font-weight: lighter;
  @media only screen and (max-width: 1280px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 950px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 481px) {
         font-size:1.4rem;
        }
}

 button {
  font-size: 1.6rem;
  @media only screen and (max-width: 1050px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 670px) {
         font-size:1.2rem;
        }
 border-radius: 1.5rem;
  background-color: ${(props) => props.theme.fix.green};
   color: white;
  cursor: pointer;
   &:hover {
      transition: all 0.5s;
      background-color: #209151;
    }
 }

 img {
        display: block;
        width:100%;
        height: auto;
    }
 `;
