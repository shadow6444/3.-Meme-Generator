import "./Meme.css";
import { useEffect, useState } from "react";

const Meme = () => {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  useEffect(() => {
    console.log("effect ran!");
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(resData=>setAllMeme(resData.data.memes))
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = useState();

  function handleClick() {
    const index = Math.floor(Math.random() * allMeme.length);
    setMeme((prevState) => ({
      ...prevState,
      randomImg: allMeme[index].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="meme-form">
        <div className="input-container">
          <div className="meme-form-input">
            <label htmlFor="top-text">Top text</label>
            <input
              id="top-text"
              type="text"
              placeholder="Shut up"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="meme-form-input">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              id="bottom-text"
              type="text"
              placeholder="and take my money"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={handleClick} className="meme-form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-image">
        <img src={meme.randomImg} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
