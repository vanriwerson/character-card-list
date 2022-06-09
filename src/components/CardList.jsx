import React from "react";
import CharacterCard from "./CharacterCard";
import { connect } from 'react-redux';

class CardList extends React.Component {
  render() {
    // 3. Pegue os characters das props, substituindo
    // a linha abaixo!
    const characters = [];

    return (
      <div>
        <h1>Characters</h1>
        <section className="card-list">
          {characters?.map((item) => (
            <CharacterCard character={item} key={Math.random()} />
          ))}
        </section>
      </div>
    );
  }
}

//1. Faça o mapStateToProps

// 2. Conecte o componente com React Redux
export default connect(mapStateToProps())(CardList);
