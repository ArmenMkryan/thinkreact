import React from 'react';
import { getImageUrl } from './utils.js';
import "./style.css";


function Bulki ({name, isBald}) {

  return (
    <li className="item">
      {isBald ? name + ' is Bald' : name}
    </li>
  );
}

function Profile({ name, imageUrl, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {Array.isArray(awards) && awards.length > 0 ? (
            <span>{awards.join(', ')}</span>
          ) : (
            <span>No awards</span>
          )}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <Bulki 
        isBald={true}
        name="1"/>
      <Bulki 
        isBald={false}
        name="2"
        />
      <Bulki 
        isBald={true}
        name="3"/>
        <Bulki 
        isBald={false}
        name="4"/>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}