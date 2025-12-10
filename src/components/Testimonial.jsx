import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { text: "Testimonial 1", author: "Person 1" },
    { text: "Testimonial 2", author: "Person 2" },
    { text: "Testimonial 3", author: "Person 3" },
    { text: "Testimonial 4", author: "Person 4" }
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((p) => (p + 1) % 4),
    onSwipedRight: () => setCurrentIndex((p) => (p - 1 + 4) % 4),
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#141414',
      color: 'white'
    }}>
      <div {...handlers} style={{
        width: '80%',
        maxWidth: '600px',
        height: '400px',
        backgroundColor: '#333',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        textAlign: 'center',
        padding: '40px',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: 'grab'
      }}>
        <div>
          <p>{testimonials[currentIndex].text}</p>
          <p style={{ marginTop: '20px', fontSize: '18px', opacity: 0.7 }}>
            {testimonials[currentIndex].author}
          </p>
          <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.5 }}>
            Swipe left/right | {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;