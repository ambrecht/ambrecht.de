import styled, { keyframes } from 'styled-components';
import Schubert from '../../public/Schubert.png';
import Fetzen from '../../public/Papierfetzen.png';
import Schach from '../../public/Schach.png';
import Books from '../../public/buecher.png';
import Naila from '../../public/naila.png';
import Image from 'next/image';
import Desktop from '../../public/Desktop.png';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ text, ID }) {
  return (
    <>
      <STYLE1></STYLE1>
      {ID >= 1 && (
        <STYLE2 Number={ID}>
          {ID === 1 && (
            <>
              <Image
                src={Schubert}
                alt="Noten"
                layout="fill"
                objectFit="contain"
              />
            </>
          )}

          {ID === 7 && (
            <Image
              src={Books}
              alt="Buecher"
              layout="fill"
              objectFit="scale-down"
            />
          )}
          {ID === 3 && (
            <Image
              src={Fetzen}
              alt="Fetzen"
              layout="fill"
              objectFit="contain"
            />
          )}
          {ID === 4 && (
            <>
              <Image src={Schach} alt="Schach" layout="fill" objectFit="none" />
            </>
          )}

          {ID === 5 && (
            <>
              <Image
                src={Naila}
                alt="Naila"
                layout="fill"
                objectFit="contain"
              />
            </>
          )}

          {ID === 2 && (
            <>
              <Image
                src={Desktop}
                alt="Desktop"
                layout="fill"
                objectFit="cover"
              />
            </>
          )}

          {ID === 6 && (
            <>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178152567&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </>
          )}

          {ID === 8 && (
            <>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://open.spotify.com/embed/track/3nmpuhgQgtd9XLx2A9aj7i?utm_source=generator"
              ></iframe>
            </>
          )}
        </STYLE2>
      )}
    </>
  );
}

//STYLE

const Fade = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}`;

const STYLE1 = styled.div`
  position: absolute;

  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  left: 50%;
  background: linear-gradient(45deg, rgba(35, 147, 255, 1) 0%, #5f1dff 100%);
  filter: blur(100rem);
  opacity: 100%;
  border-radius: 10%;
`;

const STYLE2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  right: 0;
  left: 49%;
  z-index: 100;
   mix-blend-mode: overlay;
   pointer-events: ${(props) =>
     props.Number === 8 || props.Number === 6 ? 'all' : 'none'};


  img {
   animation: ${Fade} 1s linear 1;
  }

 


  



 



 
  


  span {
 
  padding-right: ${({ theme }) => theme.padding.main};
    top: 100px;
   color: white;
   text-align: right;
   
`;
