"use client";

import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import styles from './Wheel.module.css';

const WheelComponent = ({size}) => {
  const data = [
    { option: 'Lot 1', style: { backgroundColor: '#EE4040', textColor: 'white' } },
    { option: 'Lot 2', style: { backgroundColor: '#F0CF50', textColor: 'white' } },
    { option: 'Lot 3', style: { backgroundColor: '#815CD1', textColor: 'white' } },
    { option: 'Lot 4', style: { backgroundColor: '#3DA5E0', textColor: 'white' } },
    { option: 'Lot 5', style: { backgroundColor: '#34A24F', textColor: 'white' } },
    { option: 'Lot 6', style: { backgroundColor: '#F9AA1F', textColor: 'white' } },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
    <header className="flex items-center justify-between w-full p-4 bg-white shadow-md fixed top-0 z-50">
      <div className="text-xl font-bold text-green-700">Thé Tip Top</div>
      <button className="px-4 py-2 text-white bg-green-700 rounded">Connexion</button>
    </header>
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center mt-16 w-full">
      <div className="grid grid-cols-3 gap-4 w-full max-w-screen-lg">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-lg font-bold text-green-700">Comment Participer :</h2>
          <ol className="text-left list-decimal list-inside text-black">
            <li>Achat en Boutique : Faites un achat dans notre boutique Thé Tip Top.</li>
            <li>Recevez un Code : À chaque achat, recevez un code unique.</li>
            <li>Jouez en Ligne : Rendez-vous sur notre site web et entrez votre code pour jouer à la roue.</li>
          </ol>
          <h2 className="mt-4 mb-4 text-lg font-bold text-green-700">Gagnez des Prix :</h2>
          <p className="text-left text-black">Tournez la roue et tentez de gagner de nombreux prix fantastiques ! Des réductions exclusives, des produits gratuits, et bien plus encore.</p>
          <h2 className="mt-4 mb-4 text-lg font-bold text-green-700">Utilisation des Prix :</h2>
          <ol className="text-left list-decimal list-inside text-black">
            <li>Recevez Votre Bon : Après avoir gagné, un bon électronique ou un code de confirmation vous sera envoyé.</li>
            <li>Utilisez en Boutique : Retournez en boutique avec votre bon pour échanger votre prix.</li>
          </ol>
        </div>
    <div className={styles.container}>
      <Wheel className={styles.wheel}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        size={size}
        onStopSpinning={() => {
          setMustSpin(false);
          setWinner(data[prizeNumber].option);
        }}
      />
      <button onClick={handleSpinClick} className="px-4 py-2 mt-4 text-white bg-green-700 rounded">Tourner la roue</button>
      {winner && <p>Félicitations ! Vous avez gagné : {winner}</p>}
    </div>
    <div className="p-6 bg-white rounded shadow-md">
            <h2 className="mb-4 text-lg font-bold text-green-700">Liste des lots :</h2>
            <ul className="text-left list-disc list-inside text-black">
              <li>lot 1</li>
              <li>lot 2</li>
              <li>lot 3</li>
            </ul>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <img src="/path/to/image1.png" alt="Lot 1" className="w-16 h-16" />
              <img src="/path/to/image2.png" alt="Lot 2" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full p-4 text-center bg-white shadow-md">
        CGV - Powered by Furious Duck
      </footer>
    </div>
  );
};

export default WheelComponent;
