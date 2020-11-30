import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX
// JSX Rules:
  // return single element
  // div/section/article or Fragment
  // use camelCase for html attribute
  // className instead of class
  // close every element
  // formatting
// function Greeting() {
//   return (
//     <div>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
// ReactDom.render(<Greeting />, document.getElementById('root'));

// Nested Components, React Tools
// CSS
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
}
const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt=""/>
  );
}

const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>
ReactDom.render(<BookList />, document.getElementById('root'));