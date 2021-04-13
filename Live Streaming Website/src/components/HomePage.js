import React from 'react';
import BannerMainVideo from './Home/BannerMain.js';
import AboutContent from './Home/AboutMain.js';
import TwoBlockSection from './Home/TwoColumns.js';
import TrainerContent from './Home/TrainerBlock';
import BlogSectionContent from './Home/HomeThreeColumns';
import TrainerFeatureContent from './Home/TrainerBottomBlock';

function HomePage() {
  return (
        <div>
          <BannerMainVideo />
          <AboutContent />
          <TwoBlockSection />
          <TrainerContent/>
          <BlogSectionContent/>
          <TrainerFeatureContent/>
        </div>
  );
}

export default HomePage;
