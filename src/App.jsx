import { useState } from 'react'
import React from 'react';
import Carte from './assets/components/carte'
import './App.css'
import "./assets/components/carteCss.css"
import "./assets/components/carte"

const animal= [
  {
    name:"pedro",
    image:"./assets/cat1.jpg",
    description:"chat de petite taille tres agressif",
    isvalidation:false,
  },

  {
    name:"brigitte",
    image:"./assets/th.jpg",
    description:"boxer super tranquille",
    isvalidation:false,
  },
]


function App() {

  return (
    <div className='conteneur'>
    <Carte>chat </Carte>
    <Carte>chien</Carte>
    <Carte>belle-mére</Carte>
    </div>
  )
}

export default App
