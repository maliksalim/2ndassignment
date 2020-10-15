import styled from 'styled-components';
  const Mainheader=styled.div`

  `
const Headertop=styled.div`
position:relative;
padding:1px;

margin:0px 80px;
display:flex;
justify-content:space-between;
`

const Headerbottom=styled.div`
position:sticky;
margin:0px 60px;

z-index:999;
top:0;
display:flex;
justify-content:space-between;
`
const Headertopleft=styled.div`

font-size: 13px;
display:flex;
padding-left:40px;
font-weight: 400;

line-height: 27px;

color: rgb(136, 136, 136)
`
const Headertopright=styled.div`

color:white;
display:flex;
.col{font-size:35px;
    font-weight: 600;

line-height: 27px;

color: rgb(51, 51, 51);

    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
list-style:none;
}.link:hover
  {
      border:2px solid green;
  }
.link{ padding:0px 20px;
display:flex;
    color:rgb(51, 51, 51);
    font-size:16px;
    text-decoration:none;
  }
`

const Headerbottomleft=styled.div`
position:sticky;
top:0;

`
const Headerbottomright=styled.div`
position:sticky;
display:flex;

flex-flow:row nowrap;
align-items:center;
 .col{font-size:35px;
    font-weight: 600;

line-height: 27px;

color: rgb(51, 51, 51);

    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
list-style:none;
}
.link{ padding:0px 20px;
display:flex;
    color:rgb(51, 51, 51);
    font-size:16px;
    text-decoration:none;
  }.link:hover
  {
      border-bottom:2px solid green;
  }
`

  export {Mainheader,Headertop,Headerbottom,Headertopleft,Headertopright,Headerbottomleft,Headerbottomright}