import "./Meme.css";
import memesData from "../../memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText:'',
    bottomText:'',
    randomImg: 'http://i.imgflip.com/1bij.jpg'
  });
  const [allMemeImgs,setAllMemeImgs]=useState(memesData);

  function handleClick() {
    const memesArray = allMemeImgs.data.memes;
    const index = Math.floor(Math.random() * memesArray.length);
    setMeme(prevState=>({
      ...prevState,
      randomImg:memesArray[index].url
    }));
  }

  return (
    <main>
      <div className="meme-form">
        <div className="input-container">
          <div className="meme-form-input">
            <label htmlFor="top-text">Top text</label>
            <input id="top-text" type="text" placeholder="Shut up" />
          </div>
          <div className="meme-form-input">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              id="bottom-text"
              type="text"
              placeholder="and take my money"
            />
          </div>
        </div>
        <button onClick={handleClick} className="meme-form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-image">
        <img src={meme.randomImg} />
      </div>
    </main>
  );
};

export default Meme;