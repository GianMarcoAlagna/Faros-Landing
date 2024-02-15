import './AnimatedText.css';

const AnimatedText = ({ text }) => {
  return (
    <div className="text-container">
      <div className="text-container__content text-outline">
        {text}
      </div>
      <div className="text-container__content text-fill">
        {text}
      </div>
    </div>
  );
}

export default AnimatedText;
