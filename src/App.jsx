import { useState } from 'react'
import React from 'react';
import Carte from './assets/components/carte'
import './App.css'
import "./assets/components/carte.css"
import "./assets/components/carte"
import NewCarte from './assets/components/newCarte';
import Navbar from './assets/components/navBar';

const animals= [
  {
    name:"pedro",
    image:"src/assets/cat1.jpg",
    description:"chat de petite taille très agressif",
    isvalidation:false,
   
  },
  {
    name:"brigitte",
    image:"src/assets/th.jpg",
    description:"chien trop actif",
    isvalidation:false,
    adopte:false
  },
  {
    name:"choupette",
    image:"src/assets/gettyimages-977404768-612x612.jpg",
    description:"chiot boxer adorable",
    isvalidation:false,
    adopte:false
  }
]


function App() {

  return (
    <>
    <div className='navbar'>
    <Navbar>déposer une adoption</Navbar>
    <Navbar>gardienage</Navbar>
    </div>
    <div className='conteneur'>
    <NewCarte  animalfatal = {animals} />
    </div>
   </> 
   
  )
}

export default App
