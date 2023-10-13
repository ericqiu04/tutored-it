import React, { useEffect, useRef } from 'react';
import RoughNotation from 'rough-notation';

const Annotations = ({ annotateTitle }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    // Check if the callback function is provided
    if (annotateTitle && typeof annotateTitle === 'function') {
      // Create a Rough Notation object
      const annotation = RoughNotation.create({
        type: 'underline',
        color: 'red', // Annotation color
        strokeWidth: 3, // Stroke width
        padding: 5, // Padding around the annotation
        iterations: 2, // Number of iterations for roughening effect
        multiline: false, // For multiline annotations
        animate: true, // Enable animation
      });

      // Attach the annotation to the target element
      annotation.show(); // Show the annotation
      annotation.attach(targetRef.current); // Attach to the target element

      // Clean up the annotation when the component is unmounted
      return () => {
        annotation.hide(); // Hide the annotation
      };
    }
  }, [annotateTitle]); // Dependency array includes annotateTitle to handle changes in the callback function

  return (
    <h2 ref={targetRef}>
      Annotated Title
    </h2>
  );
};

export default Annotations;