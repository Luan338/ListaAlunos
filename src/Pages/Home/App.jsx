import { useEffect, useRef, useState } from "react";
import { Card } from "../../Components/Card/Card";
import "./App.css";

export function App() {

  const [aluno, setAluno] = useState("");
  const [estudantes, setEstudantes] = useState([]);
  const [user, setUsers] = useState({ name: '', avatar: '' });
  const inputRef = useRef(null);


  function addEstudante(event) {
    event.preventDefault();
    const novoEstudante = {
      nome: aluno,
      id: Date.now(),
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    if (aluno.length > 0) {
      setEstudantes(estude => [...estude, novoEstudante]);
      setAluno("");
    }
  }

  function removeCard(id) {
    const result = estudantes.filter((aluno) => aluno.id != id);
    setEstudantes(result);
  }

  useEffect(() => {
    function focarInput() {
      inputRef.current.focus();
    }
    focarInput();
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/Luan338")
      const data = await response.json();
      setUsers({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData();
  }, [])

  return (
    <section className="container">
      <header>
        <h1>Lista de Alunos</h1>
        <section className="user">
          <h4>{user.name}</h4>
          <img src={user.avatar} alt="Perfil" />
        </section>
      </header>
      <form onSubmit={addEstudante}>
        <input
          onChange={({ target }) => { setAluno(target.value) }}
          value={aluno}
          type="text"
          placeholder="Nome do aluno..."
          ref={inputRef}
        />
        <button type="submit">Adicionar</button>
      </form>

      {
        estudantes.map((estudante) => (
          <section className="card-principal">
            <Card
              key={estudante.id}
              nome={estudante.nome}
              time={estudante.time}
            />
            <div className="exit">
              <p onClick={() => { removeCard(estudante.id) }}>x</p>
            </div>
          </section>
        )
        )
      }

    </section>
  )
}

