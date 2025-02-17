import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; // Import the Child Component

// Define the content for both categories
const contentOptions = [
  {
    question: "Which car brand is the best?",
    images: [
      { src: "/images/ford.png", text: "Ford" },
      { src: "/images/tesla.png", text: "Tesla" },
      { src: "/images/toyota.png", text: "Toyota" }
    ]
  },
  {
    question: "Who will win the NBA championship?",
    images: [
      { src: "/images/lakers.png", text: "Lakers" },
      { src: "/images/celtics.png", text: "Celtics" },
      { src: "/images/warriors.png", text: "Warriors" }
    ]
  }
];

function ParentComponent() {
  const [childStates, setChildStates] = useState([
    { imageIndex: 0 },
    { imageIndex: 0 }
  ]);

  const updateChild = (index) => {
    setChildStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].imageIndex = (newStates[index].imageIndex + 1) % 3; // Cycle through 3 images
      return newStates;
    });
  };

  return (
    <div>
      <h1>Interactive Sports & Cars Prediction</h1>
      {contentOptions.map((content, index) => (
        <ChildComponent
          key={index}
          question={content.question}
          image={content.images[childStates[index].imageIndex].src}
          text={content.images[childStates[index].imageIndex].text}
          onClick={() => updateChild(index)}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
