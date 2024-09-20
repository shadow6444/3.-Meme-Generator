export default function Meme() {
  return (
    <form className="meme-form">
      <div className="meme-container">
        <div className="meme-inputs">
          <label htmlFor="Top text">Top Text</label>
          <input type="text" />
        </div>
        <div className="meme-inputs">
          <label htmlFor="Bottom text">Bottom Text</label>
          <input type="text" />
        </div>
      </div>
      <button className="meme-button">Get a new meme image</button>
    </form>
  );
}
