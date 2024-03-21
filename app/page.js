"use client"

//React element
import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import "./style.css";

//Components
import ImageTooltip from '@/src/components/ImageTooltip/ImageTooltip.js';
import ContactModal from '@/src/components/contactModal/contactModal.js';
import LexiqueTerm from '@/src/components/LexiqueTerm/LexiqueTerm.js';

//White logos
import jsLogo from '@/public/js-logo.png'
import reactLogo from '@/public/react-logo.png'
import nextLogo from '@/public/next-logo.png'
import whiteNodeLogo from  '@/public/node-logo.png'
import phpLogo from '@/public/phpLogo.png'
import wordpressLogo from '@/public/wordpress-logo.png'
import nodeLogo from '@/public/nodeLogo.png'
import gitLogo from '@/public/gitLogo.png'
import jqueryLogo from '@/public/jqueryLogo.png'
import vueLogo from '@/public/vueLogo.png'
import sqlLogo from '@/public/sqlLogo.png'
import bootstrapLogo from '@/public/bootstrapLogo.png'
import reactWhiteLogo from "@/public/reactWhiteLogo.png"
import loupe from "@/public/loupe.png"
import creative from "@/public/creative.png"
import exp from "@/public/exp.png"
import whiteHtmlLogo from '@/public/whiteHTML2.png'
import whiteCSSLogo from '@/public/whiteCss2.png'

//Colored logos
import colorBootstrapLogo from "@/public/colorBootstrapLogo.png"
import colorJqueryLogo from "@/public/colorJqueryLogo.png"
import colorVueLogo from "@/public/colorVueLogo.png"
import colorGitLogo from "@/public/colorGitLogo.png"
import colorSqlLogo from "@/public/colorSqlLogo.png"
import colorReactLogo from '@/public/colorReactLogo.png'
import colorWpLogo from '@/public/colorWpLogo.png'
import colorNodeLogo from '@/public/colorNodeLogo.png'
import colorNextLogo from '@/public/colorNextLogo.png'
import colorJSLogo from '@/public/colorJSLogo.png'
import colorPhpLogo from '@/public/colorPhpLogo.png'
import colorHtmlLogo from '@/public/colorHTML.png'
import colorCSSLogo from '@/public/colorCss.png'

//Earth & galaxy
import earthGalaxy from '@/public/earthGalaxy3.png'
import sideGalaxy from '@/public/sideGalaxy.png'
import mediumPbgGalaxy from  '@/public/smallBluePinkGalaxy.png'
import mediumPinkGalaxy from  '@/public/smallPinkGalaxy.png'
import blueGalaxy from  '@/public/blueGalaxy5.png'
import pbgGalaxy from  '@/public/bluePinkGalaxy5.png'
import pinkGalaxy from  '@/public/pinkGalaxy5.png'

import femaleSign from "@/public/femaleSign.png"

export default function Home() {
  //Refs
  const mainRef = useRef(null);
  const appearOnScreenRefs = useRef([]);
  const refsRemaining = useRef([]);
  const smallLeftBlueGalaxy = useRef(null);
  const smallLeftPbgGalaxy = useRef(null);
  const smallLeftPinkGalaxy = useRef(null);
  const smallLeftGalaxyMarker = useRef(null);
  const bigRightGalaxyMarker = useRef(null);
  const wpServiceDiv = useRef(null);
  const shopifyServiceDiv = useRef(null);
  const reactServiceDiv = useRef(null);
  const earthImgRef = useRef(null);
  const bigLeftBlueGalaxy = useRef(null);
  const bigLeftPbgGalaxy = useRef(null);
  const bigLeftPinkGalaxy = useRef(null);

  //State
  const [wpLineGrad,setWpLineGrad] = useState(0);
  const [reactLineGrad,setReactLineGrad] = useState(0);
  const [windowIsDefined,setWindowIsDefined] = useState(false);
  const [scrollTop,setScrollTop] = useState(null);
  const [remainingHeight,setRemainingHeight] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(()=>{
    if(typeof window != "undefined" && !windowIsDefined){
      window.onscroll = ()=>{
        setScrollTop(document.querySelector("html").scrollTop);
      }
      window.onresize = ()=>{
        setWindowWidth(window.innerWidth);
      }
      setWindowWidth(window.innerWidth);
      setWindowIsDefined(true);
    }
    if(scrollTop){
      //Pour faire disparaître l'img de la Terre au fur et à messure du scroll - Uniquement sur ordinateur
      if(window.innerWidth > 768){
        if(earthImgRef.current.getBoundingClientRect().top < (window.innerHeight/(-3))){
          earthImgRef.current.style.opacity = 1 - (scrollTop - (window.innerHeight/3))/(window.innerHeight/3);
        }else{earthImgRef.current.style.opacity = 1;}
      }

      //Pour fixer les galaxies sur le côté haut gauche
      if(smallLeftGalaxyMarker.current.getBoundingClientRect().top < (window.innerWidth*(-0.10))){
        smallLeftBlueGalaxy.current.style.cssText = "position:fixed;top:-10vw;left:-14vw";
      }else{smallLeftBlueGalaxy.current.style.cssText = "";}

      //Pour fixer les galaxies sur le côté en bas à droite
      if(bigRightGalaxyMarker.current.getBoundingClientRect().top < window.innerHeight/2){
        bigLeftBlueGalaxy.current.style.cssText = "position:fixed;bottom:0;";
        let r = document.querySelector('body').clientHeight - scrollTop - window.innerHeight;
        let remain = remainingHeight || r;
        if(!remainingHeight){
          setRemainingHeight(r)
        }

        let currScrollTop = 0;

        if(bigRightGalaxyMarker.current.getBoundingClientRect().top > 0){
          currScrollTop = window.innerHeight/2 - bigRightGalaxyMarker.current.getBoundingClientRect().top;
        }else{
          currScrollTop = window.innerHeight/2 + Math.abs(bigRightGalaxyMarker.current.getBoundingClientRect().top);
        }

        if(currScrollTop < remain/7){
          smallLeftBlueGalaxy.current.style.opacity = 1;
          smallLeftPbgGalaxy.current.style.opacity = 0;
          smallLeftPinkGalaxy.current.style.opacity = 0;

          bigLeftBlueGalaxy.current.style.opacity = 1;
          bigLeftPbgGalaxy.current.style.opacity = 0;
          bigLeftPinkGalaxy.current.style.opacity = 0;
        }else if(currScrollTop < (2*remain)/7){
          let l = currScrollTop - (remain/7);
          
          smallLeftBlueGalaxy.current.style.opacity = 1;
          smallLeftPbgGalaxy.current.style.opacity = l/(remain/7);
          smallLeftPinkGalaxy.current.style.opacity = 0;

          bigLeftBlueGalaxy.current.style.opacity = 1;
          bigLeftPbgGalaxy.current.style.opacity = l/(remain/7);
          bigLeftPinkGalaxy.current.style.opacity = 0;

        }else if(currScrollTop < (3*remain)/7){
          let l = currScrollTop - (2*remain)/7;

          smallLeftBlueGalaxy.current.style.opacity = 1 - l/(remain/7);
          smallLeftPbgGalaxy.current.style.opacity = 1;
          smallLeftPinkGalaxy.current.style.opacity = 0;

          bigLeftBlueGalaxy.current.style.opacity = 1 - l/(remain/7);
          bigLeftPbgGalaxy.current.style.opacity = 1;
          bigLeftPinkGalaxy.current.style.opacity = 0;
        }else if(currScrollTop < (4*remain)/7){
          smallLeftBlueGalaxy.current.style.opacity = 0;
          smallLeftPbgGalaxy.current.style.opacity = 1;
          smallLeftPinkGalaxy.current.style.opacity = 0;

          bigLeftBlueGalaxy.current.style.opacity = 0;
          bigLeftPbgGalaxy.current.style.opacity = 1;
          bigLeftPinkGalaxy.current.style.opacity = 0;
        }else if(currScrollTop < (5*remain)/7){
          let l = currScrollTop - (4*remain)/7;
          
          smallLeftBlueGalaxy.current.style.opacity = 0;
          smallLeftPbgGalaxy.current.style.opacity = 1;
          smallLeftPinkGalaxy.current.style.opacity = l/(remain/7);

          bigLeftBlueGalaxy.current.style.opacity = 0;
          bigLeftPbgGalaxy.current.style.opacity = 1;
          bigLeftPinkGalaxy.current.style.opacity = l/(remain/7);
        }else if(currScrollTop < (6*remain)/7){
          let l = currScrollTop - (5*remain)/7;
          
          smallLeftBlueGalaxy.current.style.opacity = 0;
          smallLeftPbgGalaxy.current.style.opacity = 1 - l/(remain/7);
          smallLeftPinkGalaxy.current.style.opacity = l;

          bigLeftBlueGalaxy.current.style.opacity = 0;
          bigLeftPbgGalaxy.current.style.opacity = 1 - l/(remain/7);
          bigLeftPinkGalaxy.current.style.opacity = 1;
        }else{
          smallLeftBlueGalaxy.current.style.opacity = 0;
          smallLeftPbgGalaxy.current.style.opacity = 0;
          smallLeftPinkGalaxy.current.style.opacity = 1;

          bigLeftBlueGalaxy.current.style.opacity = 0;
          bigLeftPbgGalaxy.current.style.opacity = 0;
          bigLeftPinkGalaxy.current.style.opacity = 1;
        }

      }else{
        setRemainingHeight(null);
        bigLeftBlueGalaxy.current.style.cssText = "position:absolute";
      }
    }
  },[scrollTop]);

  return (
    <main ref={mainRef}>
      <ContactModal windowWidth={windowWidth}/>
      <section className="section1">
        <div>
          <h1>Concrétisons ensemble un projet qui vous ressemble</h1>
          <div>Marquez votre présence sur le web</div>
          <div className={styles.mainBtn_container}>
            <a href="#servicesSection" className="default_btn">Voir mes Services</a>
          </div>
          <div className="miniPresentation">
            <div>Bintou - Développeuse web</div>
            <div className="shortLogoPresentation">
              <Image src={jsLogo} alt="Logo JS"/>
              <Image src={reactLogo} alt="Logo React"/>
              <Image src={nextLogo} alt="Logo Next"/>
              <Image src={whiteNodeLogo} alt="Logo Node"/>
              <Image src={phpLogo} alt="Logo PHP"/>
              <Image src={wordpressLogo} alt="Logo Wordpress"/>
            </div>
            <div><a className="knowMore_link" href="#allLangagesSection">En savoir plus sur les langages &#62;</a></div>
          </div>
        </div>
        <div className="earth_container">
          <Image src={earthGalaxy} alt="Image terre" className="earth_img" ref={earthImgRef}/>
        </div>
      </section>
      <section className="section2" id="quiSuisJeSection">
        <Image src={sideGalaxy} className="smallLeftGalaxy" ref={smallLeftBlueGalaxy} id="blueGal" alt='Small blue galaxy on left'/>
        <Image src={mediumPbgGalaxy} className="smallLeftFixedGalaxy" ref={smallLeftPbgGalaxy} height="50vw" width="50vw" alt='Small pink blue gold galaxy on left'/>
        <Image src={mediumPinkGalaxy} className="smallLeftFixedGalaxy" ref={smallLeftPinkGalaxy} alt='Small pink left galaxy'/>
        <div className="smallLeftGalaxyMarker" ref={smallLeftGalaxyMarker} id="mark"></div>
        <div className="content_container">
          <div>
            <h2 className="quiSuisJe_title">Qui suis-je ?</h2>
            <h3 className="name"><Image className="femaleSign" src={femaleSign} alt="Female sign"/><span>Bintou</span>, 24 ans</h3>
            <p className="tags_container">
              <span className="tag">Développeuse web expérimentée</span>
              <span className="tag">Conceptrice d'application web</span>
              <span className="tag">Développeuse web Wordpress</span>
              <span className="tag">Développeuse front-end</span>
              <span className="tag">Développeuse back-end</span>
            </p>
            <div>
              <div><a href="#servicesSection" className="default_btn">Voir mes Services</a></div>
            </div>
          </div>
          <div className="whyMe_section">
            <h3>Pourquoi moi ?</h3>
            <p className="max800">Développeuse archarnée du travail, mon but est de transformer votre projet en réalité. Pour ce faire, je mettrai à votre disposition l'ensemble de mes compétences et qualités.</p>
            <div className="mini_title"><Image src={loupe} className="miniImg"/>Attentive et minutieuse</div>
            <p className="max800">De nature attentive, je saurai être à votre écoute afin de fidèlement répondre à chacune de vos attentes. Aussi, mon sens du détail me permettra de parfaire le résultat final.</p>
            <div className="mini_title"><Image src={exp} className="miniImg"/>Expérimentée</div>
            <p className="max800">Mon expérience permettra de répondre à votre demande dans les plus brefs délais et cela tout en fournissant un service de qualité.</p>
            <div className="mini_title"><Image src={creative} className="miniImg"/>Créative</div>
            <p className="max800">Sur le plan technique, ma créativité me permettra de trouver une solution au plus grand nombre de problèmes et donc de répondre à votre demande du mieux possible.</p>
          </div>
          <div id="allLangagesSection">
            <h3 className="language_title">Les langages et technologies maîtrisés</h3>
            <div className="logo_container first">
              <div>
                <ImageTooltip image1={colorHtmlLogo} image2={whiteHtmlLogo} info="Incontournable du développement web, HTML est le langage permettant de structurer une page web. Il est requis lors de la création d'un site web et permet de définir son contenu et la façon dont il est disposé." title="HTML"/>
              </div>
              <div>
                <ImageTooltip image1={colorCSSLogo} image2={whiteCSSLogo} info="Css est le langage permettant de donner un style à un site web. En effet il permet de définir la couleur des éléments, leur taille, etc." title="CSS"/>
              </div>
              <div>
                <ImageTooltip image1={colorJSLogo} image2={jsLogo} info="Indispensable pour les développeurs, ce langage permet de rendre dynamique un site web. En effet, il permet non seulement d'interragir avec les visiteurs du site mais également de créer des animations qui rendent l'expérience utilisateur plus agréable." title="JavaScript"/>
              </div>
              <div>
                <ImageTooltip image1={colorReactLogo} image2={reactLogo} info="React est une bibliothèque<span>*</span> basée sur le langage javaScript. Elle offre une multitude de fonctionnalités et permet aux développeurs de créer des applications web optimales et durables dans le temps." title="React"/>
              </div>
              <div>
                <ImageTooltip image1={colorNextLogo} image2={nextLogo} info="Next est un framework* basé sur la bibliothèque* React. Contrairement à React il permet la conception complète d'un site web." title="Next"/>
              </div>
              <div>
                <ImageTooltip image1={colorNodeLogo} image2={nodeLogo} info="Node est un environnement d'exécution* permettant de créer des applications performantes." title="Node"/>
              </div>
            </div>
            <div className="logo_container">
              <div>
                <ImageTooltip image1={colorPhpLogo} image2={phpLogo} info="PHP est un langage exécuter par le serveur. Son atoût principal est qu'il permet de récupérer et traiter les données stockées dans la base de données." title="PHP"/>
              </div>
              <div>
                <ImageTooltip image1={colorWpLogo} image2={wordpressLogo} info="Wordpress est un CMS* permettant de créer un site web facilement sans avoir besoin de coder. Ses nombreuses extensions permettent de couvrir le plus grand nombre de besoins." title="Wordpress"/>
              </div>
              <div>
                <ImageTooltip image1={colorJqueryLogo} image2={jqueryLogo} info="JQuery est une bibliothèque basée sur le langage javaScript, qui permet aux développeur de faciliter l'écriture de leur code. Si bien utilisée, elle permet un gain de temps considérable pour la création d'une application web." title="JQuery"/>
              </div>
              <div>
                <ImageTooltip image1={colorBootstrapLogo} image2={bootstrapLogo} info="Bootstrap est une bibliothèque HTML, CSS et JavaScript permettant de facilité la mise en style de son site web. Elle permet notamment de créer aisément des design responsive* et de qualité." title="Bootstrap"/>
              </div>
              <div>
                <ImageTooltip image1={colorSqlLogo} image2={sqlLogo} info="Langage permettant de questionner la base de données afin d'en extraire les données qui nous intérressent." title="MySQL"/>
              </div>
              <div>
                <ImageTooltip image1={colorGitLogo} image2={gitLogo} info="Langage permettant de rendre dynamique un site web." title="Git"/>
              </div>
            </div>
            <div><span className="infos_icon">i</span>Cliquez sur les icônes pour en savoir plus pour chaque langage</div>
            {/* <div className="nb_container">NB : Cliquez sur les étoiles pour voir la definition d'un terme</div> */}
          </div>
            {/* <h2><span className="biggerTxt">Bintou Fofana</span>, 24 ans</h2> */}
        </div>
        <div ref={bigRightGalaxyMarker} className="bigRightGalaxyMarker"></div>
        <Image src={blueGalaxy} ref={bigLeftBlueGalaxy} className="bigRightGalaxy blue" alt='Big blue galaxy on left'/>
        <Image src={pbgGalaxy} ref={bigLeftPbgGalaxy} className="bigRightGalaxy" alt='Big pink blue gold galaxy on left'/>
        <Image src={pinkGalaxy} ref={bigLeftPinkGalaxy} className="bigRightGalaxy" alt='Big pink galaxy on left'/>
      </section>
      <section className="section3" id="servicesSection">
        <h2>Mes services</h2>
        <div>Voici les services que je propose.</div>
        <h3 className="service_title">
          <span className='serviceLogo_container'>
            <Image src={colorWpLogo} alt="Logo wordpress"/>
          </span>
          <span>Wordpress</span>
        </h3>
        <div className="servicesContent_container" ref={wpServiceDiv}> 
          {
            wpServiceDiv.current?<div style={{"--line-height":wpServiceDiv.current.clientHeight,"--grad-percent":wpLineGrad}} className="decoLine" ref={(e) => { refsRemaining.current[11] = e;}}></div>:""
          }
          <div className={"appearOnViewportServiceName servicesDetails_container"} ref={(e) => {refsRemaining.current[12] = e;}}>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Site vitrine</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Page/section présentant une activité professionnelle (fondateurs, but/objectif, ...)</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Page/section de prise de contact</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Design</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- FAQ (optionnel) </p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Hébergement (optionnel) </p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Blog</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Configurration du site</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Design</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Hébergement (optionnel) </p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Débuggage</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Réglage de bug sur le site</p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Site e-commerce</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Configuration de la boutique</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Design</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Gestion des stocks</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Configuration des mails</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Hébergement (optionnel) </p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Formation</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Apprendre les bases Wordpress</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Apprendre à gérer son site e-commerce avec wordpress</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Apprendre à gérer son site son blog</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Apprendre à héberger son site</p>
            </div>
          </div>
        </div>
        <h3 className="service_title">
          <span className="serviceLogo_container" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>
            <Image src={reactWhiteLogo} alt="Logo react"/>
          </span>
          <span className={"appearOnViewportServiceName"} ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>React</span>
        </h3>
        <div className="servicesContent_container" ref={reactServiceDiv}>
          {
            reactServiceDiv.current?<div style={{"--line-height":reactServiceDiv.current.clientHeight,"--grad-percent":reactLineGrad}} className="decoLine" ref={(e) => { refsRemaining.current[24] = e;}}></div>:""
          }
          <div className={"appearOnViewportServiceName servicesDetails_container"} ref={(e) => { refsRemaining.current[25] = e;}}>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Site vitrine ultra personnalisé</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Site vitrine ultra personnalisé et optimisé</p>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Design</p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Debbugage</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Debbugage</p>
            </div>
            <div>
              <h4 className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>Implémentation de fonctionnalités spécifiques</h4>
              <p className="appearOnViewport" ref={(e) => {if(!appearOnScreenRefs.current.includes(e))appearOnScreenRefs.current.push(e)}}>- Implémentation de fonctionnalités spécifiques</p>
            </div>
          </div>
        </div>
      </section>
      <section id="lexique" className="section4 lexiqueContainer">
          <h2>Lexique</h2>
          <LexiqueTerm word="Base de données" def="Une base de données est ..." id="BD_term"/>
          <LexiqueTerm word="Bibliothèque" def="Une biblilothèque est ..." id="biblio_term"/>
          <LexiqueTerm word="Framework" def="Un framework est ..." id="framework_term"/>
      </section>
    </main>
  );
}
