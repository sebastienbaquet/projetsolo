import { useState } from 'react'
import React from 'react';
import Carte from './assets/components/carte'
import './App.css'
import "./assets/components/carteCss.css"
import "./assets/components/carte"
import NewCarte from './assets/components/carteNew';

const animal= [
  {
    name:"pedro",
    image:"src/assets/cat1.jpg",
    description:"chat de petite taille très agressif",
    isvalidation:false,
  },

  {
    name:"brigitte",
    image:"src/assets/th.jpg",
    description:"chien très actif",
    isvalidation:false,
  },
]


function App() {

  return (
    <div className='conteneur'>
    <NewCarte  animalfatal = {animal} />
   
    </div>
  )
}

export default App
