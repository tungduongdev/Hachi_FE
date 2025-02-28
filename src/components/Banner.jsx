"use client"; 
import React from 'react'

function Banner() {
  const words = ['Ecommerce', 'Business', 'Store', 'Shop']
  const [indexWord, setIndexWord] = React.useState(0)
  const [isDelete, isSetDelete] = React.useState(false)
  const [letterIndex, setLetterIndex] = React.useState(0)
  const [word, setWord] = React.useState(words[0])

  // React.useEffect(() => {
  //   const currentWord = words[indexWord];

  //   if (isDelete) {
  //     setWord(currentWord.substring(0, letterIndex - 1));
  //     setLetterIndex((prev) => prev - 1);
  //   } else {
  //     setWord(currentWord.substring(0, letterIndex + 1));
  //     setLetterIndex((prev) => prev + 1);
  //   }

  //   let timeout;
  //   if (!isDelete && letterIndex === currentWord.length) {
  //     timeout = setTimeout(() => isSetDelete(true), 1000);
  //   } else if (isDelete && letterIndex === 0) {
  //     isSetDelete(false);
  //     setIndexWord((prev) => (prev + 1) % words.length);
  //     timeout = setTimeout(() => {}, 1000);
  //   } else {
  //     timeout = setTimeout(() => {}, isDelete ? 100 : 300);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [indexWord, letterIndex, isDelete]);

  return (
    <div className="container">
    <section className="main-banner">
      <div className="heading1">
        <h3>
          Bootstrap 4 <br/>E-commerce Template
        </h3>
        <p>
          Alls You Need To Create An <span id="changing-text">{word}</span> Website
        </p>
      </div>
    </section>
  </div>
  )
}

export default Banner