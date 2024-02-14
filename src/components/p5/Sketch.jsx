import React, { useRef, useEffect } from 'react';
import seaweed from '../../assets/seaweed.png';
import p5 from 'p5';

const Sketch = ({ parent }) => {
  const sketchRef = useRef(null);
  const parentHeight = parent?.current?.clientHeight || window.innerHeight;
  const parentWidth = parent?.current?.clientWidth || window.innerWidth;
  useEffect(() => {
    const sketch = new p5(p => {
      let bubbles = []; // Array to store bubbles
      let img;

      p.preload = () => {
        img = p.loadImage(seaweed);
      };

      p.setup = () => {
        createCanvas();
        drawImage();
      };

      p.draw = () => {
        redrawCanvas();
        drawImage();
        drawBubbles();
      };

      function createCanvas() {
        p.createCanvas(parentWidth, parentHeight);
      }

      function redrawCanvas() {
        p.clear();
        p.background(255, 0);
      }

      function drawImage() {
        p.image(img, 50, p.height - 150, 200, 200);
        p.image(img, p.width - 200, p.height - 150, 200, 200);
      }

      function drawBubbles() {
        // Create new bubbles occasionally
        if (p.frameCount % 30 === 0) {
          let x = p.random(p.width);
          let bubble = new Bubble(x, p.height + 40, 20);
          bubbles.push(bubble);
        }
        // Update and display bubbles
        for (let i = bubbles.length - 1; i >= 0; i--) {
          bubbles[i].move();
          bubbles[i].display();

          // Remove bubbles that are off the canvas
          if (bubbles[i].offScreen()) {
            bubbles.splice(i, 1);
          }
        }
      }

      class Bubble {
        constructor(x, y, r) {
          this.x = x;
          this.y = y;
          this.r = r + (p.random() * 10);
          this.dirX = p.floor(p.random() * 3) - 1; // Randomize dirX
          this.dirY = 1;
          this.acceleration = 0.1;
        }

        display() {
          // the bubble itself
          p.fill(0, 255, 255);
          p.ellipse(this.x, this.y, this.r * 2);
          // the bubble's shiny part
          p.fill(255);
          p.stroke(225);
          p.ellipse(this.x + 5, this.y - 10, this.r / 2);
          // the bubble's highlight
          p.strokeWeight(4)
          p.stroke(0, 100, 100);
        }

        move() {
          this.x += this.dirX - 0.1;
          this.y -= 1 + this.acceleration; // Move the bubble upwards
          this.acceleration += 0.01;
        }

        offScreen() {
          return this.y < -this.r; // Check if the bubble is off the canvas
        }
      }

      // Resize canvas when window is resized
      window.addEventListener('resize', () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        redrawCanvas();
      });

    }, sketchRef.current);

    return () => {
      sketch.remove();
    };
  }, [parent]);
  
  return <div className="p5-sketch" ref={sketchRef}></div>;
};

export default Sketch;
