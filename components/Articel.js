import styled from 'styled-components';
import Image from 'next/image';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ image, alttext }) {
  return (
    <GridBox>
      <AutorBox>
        <AutorImageBox>
          <Bild src={image} alt={alttext} width={250} height={250} layout="" />
        </AutorImageBox>
        <div>
          <h2 class="name">Daniel Clifford</h2>
          <p class="position">Verified Graduate</p>
        </div>
      </AutorBox>
      <p>
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </p>
      <p>
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    </GridBox>
  );
}

//STYLE

const GridBox = styled.article`
  font-size: 0.8125rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(217 19% 35%/ 0.25);
  color: white;
  background: linear-gradient(to right, #2393ff 0%, #5f1df2 100%); ;
`;

const AutorBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const AutorImageBox = styled.div`
  width: 1.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  max-width: 100%;
  display: block;
`;

const Bild = styled(Image)``;
