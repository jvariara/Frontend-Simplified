import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this)
    this.genRandomImg = this.genRandomImg.bind(this)
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
        [name]: value
    })
  }

  genRandomImg(event) {
    event.preventDefault()

    const random = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randImg = this.state.allMemeImgs[random].url
    this.setState({
        randomImg: randImg
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.genRandomImg}>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
