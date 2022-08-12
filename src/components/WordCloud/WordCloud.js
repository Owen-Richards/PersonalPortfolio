import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';
import './WordCloud.scss';

// const container = '.content';
const texts = [
  'React', 'C++', 'JavaScript',
  'CSS3', 'HTML', 'Python',
  'AWS', 'DataDog', 'Microsoft Azure',
  'C', 'Vanta.js', 'three.js',
  'PHP', 'Java', 'Docker', 'Scss', 'Kupernetes',
  'SQL', 'Linux',
];
// const options = {
//   radius: 250,
//   maxSpeed: 'fast',
//   initSpeed: 'fast',
//   direction: 135,
//   keep: true
// };

const WordCloud = () => {
  useEffect(() => {
    TagCloud('.content', texts, {
        // radius in px
        radius: 250,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'normal',
        initSpeed: 'normal',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        
        // interact with cursor move on mouse out
        keep: true
        
    });
  });

  return (
    <span className='content'>
    </span>
  )
}

export default WordCloud;