// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import Layout from '../components/layout';
import DallasLogoSvg from '../images/reactjs-dallas-icon.svg';

// Local Variables
const rootStyles = {
  textAlign: 'center'
};

const heroContainerStyles = {
  background: '#282C34',
  padding: '2rem',
};

const heroTitleStyles = {
  color: '#61dafb',
};

const heroTextStyles = {
  color: 'white',
  fontWeight: 100,
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3.5rem 0',
}

const dallasLogoContainerStyles = {
  background: '#B9B9B9',
  display: 'flex',
  justifyContent: 'center',
  padding: 64,
}

const dallasLogoStyles = {
  width: 128,
  height: 128,
};

// Component Definition
const IndexPage = () => {
  return (
    <Layout>
      <div css={rootStyles}>
        <section css={heroContainerStyles}>
          <header>
            <h1 css={heroTitleStyles}>Events</h1>
            <div css={heroTextStyles}>Where DFW meets</div>
          </header>
        </section>

        <section css={contentStyles}>
          <h3>December 2018</h3>
          <h4>ReactJS @ BottleRocket</h4>
          <div>6:15 - 7:00pm: Pizza/Drinks & meeting other people</div>
          <div>6:30 - 7:00pm: Jobs Open Mic and jobs follow-up</div>
          <div>7:00 - 7:45pm - Morgan Dedmon - "WASM: What is that?"</div>
          <div>8:00 - 8:45pm: Salvador Aceves - "Redux Sagas in Practice"</div>

          <p style={{ marginTop: 12 }}>
            <a href="https://www.meetup.com/ReactJSDallas/events/pbbdwnyxqbpb/">Meetup link</a>
          </p>
        </section>

        <div css={dallasLogoContainerStyles}>
          <DallasLogoSvg style={dallasLogoStyles} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
