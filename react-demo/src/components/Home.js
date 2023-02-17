import React, { useEffect, useState } from 'react';
import Button from './Button';
import Cards from './Cards';
import Styles from './Home.module.css';
import Footer from './Footer';

const Home = () => {

  const buttonList = [{id:1, btnName:'Get started', buttonStyle:'btn--outline',
buttonSize:'btn--medium'},
{id:2, btnName:'View online', buttonStyle:'btn--primary', buttonSize:'btn--large'}
];

  let [count, setCount] = useState(1);

  let [size, setSize] = useState(window.innerWidth)
  const clickHandler = () => {
    setCount(++count)
  }

  const showSize = () => {
    setSize(window.innerWidth)

  }
  

  useEffect(() => {
    document.title = ` You have clicked ${count} times`;
   

  }, [count])

  window.addEventListener('resize', showSize)
  window.addEventListener('load', showSize);

 


  return (
    <>
       <div className={`${Styles.home} `}>
        <div className="test">{size}</div>
        <div className={`${Styles.content}`}>
            <div className={`${Styles.title}`}>ADVENTURE AWAITS</div>
            <div className={`${Styles.label}`}>What are you waiting for</div>
            <div className={`${Styles.btnGroup}`}>
             {
               buttonList.map((btnList)=>(
                  <Button label = { btnList.btnName }
                  buttonStyle = { btnList.buttonStyle}
                  buttonSize = { btnList.buttonSize}
                  clickHandler = { clickHandler }
                  key = { btnList.id }
                  />
               ))
             }
            </div>
        </div>
    </div>

      <Cards />
      <Footer />


    </>
   
  )
}

export default Home;  

