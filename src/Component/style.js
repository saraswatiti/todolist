import style from "styled-components";

export const AppWrapper = style.div`
text-align: center;
`

export const AppWrap = style.div`
background: #881280;
text-align: center;
padding: 15px;
width: 40%;
height:100%;
margin: 50px auto;
box-shadow: 0 0 7px rgba(0,0,0,0.5)
`
export const FormWrap = style.div`
input{
    padding:5px 20px;
    height: 31px;
    width: 50%;
    font-size:18px;
}
input:focus{
    outline:0;
}
button{
    height: 44px;
    padding: 5px 20px;
    background: #01101d;
    border: 0;
    color: #fff;
    font-size: 16px;
}
`
export const ListWrap = style.div`
    position:relative;
    p{
        background: #fff;
        padding: 5px 70px 5px 15px;
        font-size:18px;
        margin:0;
    }

    svg{
        color: #000;
        cursor: pointer;
        margin-right:3px;
    }
`
export const ListBox = style.div`
    position: relative;
    display: inline-block;
`
export const IconWrap = style.div`
    position: absolute;
    right: 4px;
    top: 8px;
`