/*
import React, { useRef } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Card from './Card';

const Home = () => {
  const newsData = [
    {
      id: 1,
      title: 'News 1',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'News 2',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'News 3',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'News 4',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      title: 'News 5',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      title: 'News 6',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more news items here...
  ];

  const carouselRef = useRef();

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollToItem(carouselRef.current.getCurrentItem() - 1, true);
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollToItem(carouselRef.current.getCurrentItem() + 1, true);
    }
  };

  const slides = newsData.map((newsItem) => (
    <Card key={newsItem.id} newsItem={newsItem} />
  ));

  const carouselOptions = {
    itemsToShow: 3,
    showArrows: true,
    arrowSize: 30,
    arrowMargin: 10,
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <ReactSimplyCarousel ref={carouselRef} {...carouselOptions}>
          {slides}
        </ReactSimplyCarousel>
      </div>
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Home;
*/

import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Card from './Card';

function ReactSimplyCarouselExample() {


  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const newsData = [
    {
      id: 1,
      title: 'News 1',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'News 2',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'News 3',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'News 4',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      title: 'News 5',
      imageSrc: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      title: 'News 6',
      imageSrc: 'https://example.com/image2.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more news items here...
  ];

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */

          newsData.map((news) => (
            <Card
              title={news.title}
              description={news.description}
              image={news.image}
            />
          ))

        }

      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;