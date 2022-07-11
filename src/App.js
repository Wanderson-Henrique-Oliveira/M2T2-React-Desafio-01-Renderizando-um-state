import React, {Component} from "react";
import "./App.css";
//criar import, nomear e informar o caminho.
import Img from "./assets/pineapple.png";

class App extends Component{

state = {
  nome: "Henrique",
  idade: 29,
  comidaFavorita: "Pão de Queijo",
  musicasPreferidas: ["The Killing Moon", "Love Will Tear Us Apart", "Patricia In Pain"],
}

  render(){
    return(
      <div className="container">
        <h1>Olá, eu sou {this.state.nome},</h1>
        <h2>tenho {this.state.idade} anos e</h2>
        <h3>minha comida favorita é {this.state.comidaFavorita}!</h3>
        <figure>
{/* chamar a tag 'img' e informar no 'src' o nome dado ao 'import' */}
          <img src={Img}/>
          <figcaption>Minha fruta favorita!</figcaption>
        </figure>
        <h4>Meu top 3 em músicas favoritas são:</h4>
        <ol>
          <li><a href="https://open.spotify.com/track/35E2eKIEXXnP5q9L51iOAk?si=dee7079c65874b40" target="_blank">{this.state.musicasPreferidas[0]}</a> da banda Echo & the Bunnymen;</li>
          <li><a href="https://open.spotify.com/track/2JO3HwMRPeya8bXbtbyPcf?si=92f5887fa52b4f8f" target="_blank">{this.state.musicasPreferidas[1]}</a> da banda Joy Division;</li>
          <li><a href="https://open.spotify.com/track/5S3xzixfsrAoRt0wgW6xpB?si=400ee1b8e6d84847" target="_blank">{this.state.musicasPreferidas[2]}</a> da banda Paralysed Age;</li>
        </ol>
      </div>
    )
  }
}

export default App;