import React from 'react'
import './App.css'

// {/* -----------------NavBar assets----------------- */}
import NavBar from './Components/NavBar/NavBar'
import navmail from './assets/Img/Vector (2).svg'
import burger from './assets/Img/burger-solid (1).svg'
import closebtn from './assets/Img/circle-xmark-regular.svg'

// {/* -----------------Hero assets----------------- */}
import Hero from './Components/Hero/Hero'
import heroBg from './assets/Img/back-hero.png'
import telegram from './assets/Img/Vector (3).svg'
import email from './assets/Img/Vector (2).svg'
import github from './assets/Img/github.svg'
// import CV from './assets/Img/Lana ALnouri.pdf'

// {/* -----------------Skills assets----------------- */}
import Skills from './Components/Skills/Skills'
import code from './assets/Img/codepic.png'
import html from './assets/Img/html (2).png'
import css from './assets/Img/css (2).png'
import js from './assets/Img/js (2).png'
import picreact from './assets/Img/react (2).png'
import bootstrap from './assets/Img/boot.png'
import tailwind from './assets/Img/tailwind.png'

{/* -----------------Portfolio assets----------------- */}
// import { Portfolio } from './Components/Portfolio/Portfolio'
import Portfolio from './Components/Portfolio/Portfolio'
import furniture from './assets/Img/furniture.jpg'
import bootstrapPortfolio from './assets/Img/bootstrapPortfolio.jpg'
import RentUp from './assets/Img/RentUp.jpg'
import HomeversePortfolio from './assets/Img/HomeversePortfolio.jpg'
import travel from './assets/Img/travel.png'
import tailwindpro from './assets/Img/tailwindpro.png'



// {/* -----------------Works assets----------------- */}
import Works from './Components/Works/Works'

// {/* -----------------Footer assets----------------- */}
import Footer from './Components/Footer/Footer'
import footerImg from './assets/Img/footerImg.png'
import mywhatsapp from './assets/Img/whatsapp.svg'
import myemail from './assets/Img/Vector (2).svg'


const App = () => {
  return (
    <>
        {/* -----------------NavBar Section----------------- */}
        <NavBar navmail={navmail} email="alnourilanamhd@gmail.com" 
          logo="web developer"  menu={burger} closebtn={closebtn} />

        {/* ----------------Hero Section----------------- */}
        <Hero hello="Hello , I'm" myName="Lana ALnouri" dev="I am a Front-End Developer" 
        defn="I code websites beautifully and love what I do. that simple! Taking into account the design of websites suitable for all screens, as you will see in the models below"
        telegram={telegram} email={email} github={github}  
        cv="Download My CV" 
        heroBg={heroBg}    />

        {/* -----------------Skills Section----------------- */}
        <Skills SkillsTitle="EDUCATION & SKILLS" education="education"
          collagelearn1 ="B"
          collagelearn2 ="A"
          collagelearn3 ="I"
          collagelearn4 ="T"
          datecollage="2019/2023" collage="Studying information technology at the Syrian Virtual University"
          courselearnone1="Fl" 
          courselearnone2="ut" 
          courselearnone3="t" 
          courselearnone4="er" 
          datecourseOne="2020/2021" courseOne="Learn the basics of building user interfaces for Android, iOS, Windows, and web applications 'Flutter' /Online training through the university " 
          courselearntwo1="Win"
          courselearntwo2="dows "
          courselearntwo3="Applic"
          courselearntwo4="ations"
          datecourseTwo="2021/2022" courseTwo="Graphical operating system 'Windows applications' /Online training through the university "
          courselearnthree1="Front"
          courselearnthree2="-End "
          courselearnthree3="Deve"
          courselearnthree4="lopment"
          datecourseThree="2023/2024" courseThree="Website programming 'Front-End Development' /With Vica Web Solution - Zero Point "
          SkillsTitlechild="Skills" code={code}
          html={html} css={css} js={js}
          picreact={picreact} bootstrap={bootstrap} 
          tailwind={tailwind} />

        {/* -----------------Portfolio Section----------------- */}
        <Portfolio bootstrapPortfolio={bootstrapPortfolio}
           furniture={furniture} RentUp={RentUp} HomeversePortfolio={HomeversePortfolio} 
            travel={travel} tailwindpro={tailwindpro}  />
        
        {/* -----------------Works Section----------------- */}
          <Works experiance="works & Experiance"
          bankingandtraining1="Banking"
          bankingandtraining2="&"
          bankingandtraining3="Training"
          bankingandtraining4="Center"
          jobdiscrone="I worked at the Banking and Training   Center as Assistant  Director of the Human Resources Department
          " joboneyear="2017 / 2018"
          FoodcoIndustry1="Foo"
          FoodcoIndustry2="dco   "
          FoodcoIndustry3="L."
          FoodcoIndustry4="L.C"
          jobdiscrtwo="I worked as an administrative coordinator and coordinator of the machinery department at the Nutrition Food Industries Limited Liability Company"
          jobtwoyear="2018 / 2023 "  />


{/* -----------------Footer Section----------------- */}
          <Footer
          footerImg={footerImg}
          build="Let's build our project together" 
          contact="contact with me"
          mywhatsapp={mywhatsapp} phonenum="+ 963 959 223 051"
          myemail={myemail} mailAddress="alnourilanamhd@gmail.com"
          />
    </>
  )
}

export default App
