import "./styles.css";
import React from "react";

const App = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza", "rosa"];

  const [cores, setCores] = React.useState(["azul"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((e) => (
        <label>
          <input
            type="checkbox"
            value={e}
            checked={handleChecked(e)}
            onChange={handleChange}
          />
          {e}
        </label>
      ))}
    </form>
  );
};

export default App;
