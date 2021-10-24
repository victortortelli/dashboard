import React from "react";
import { useState } from "react";
import axios from "axios";
import "./styles.css";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3333/paciente",
});

export default function CadastrarPaciente() {
  const history = useHistory();

  const redirectEditar = () => {
    history.push(`/paciente/id/${data.cartaoSus}`);
  };

  const [data, setData] = useState({
    cartaoSus: "",
    nome: "",
    rg: "",
    dataNasc: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
    escola: "",
    industria: "",
    genero: "",
    email: "",
  });

  function submit(e) {
    e.preventDefault();
    api.post("/", {
      cartaoSus: data.cartaoSus,
      nome: data.nome,
      rg: data.rg,
      dataNasc: data.dataNasc,
      rua: data.rua,
      bairro: data.bairro,
      numero: data.numero,
      complemento: data.complemento,
      cidade: data.cidade,
      estado: data.estado,
      escola: data.escola,
      industria: data.industria,
      genero: data.genero,
      email: data.email,
    });
    redirectEditar();
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="cadastrarPacienteWrapper">
      <h1 className="cadastrarPacienteTitulo">Cadastrar paciente</h1>
      <form
        onSubmit={(e) => submit(e)}
        action=""
        className="cadastrarPacienteForm"
      >
        <div className="cadastrarPacienteItem">
          <label>Nome Completo*</label>
          <input
            onChange={(e) => handle(e)}
            id="nome"
            value={data.nome}
            type="text"
            placeholder="Victor Putton Tortelli de Souza"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Data de Nascimento*</label>
          <input
            onChange={(e) => handle(e)}
            id="dataNasc"
            value={data.dataNasc}
            type="date"
            placeholder="25/08/2021"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Gênero*</label>
          <select
            onChange={(e) => handle(e)}
            value={data.genero}
            name="genero"
            id="genero"
            className="cadastrarPacienteEstado"
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="cadastrarPacienteItem">
          <label>RG</label>
          <input
            onChange={(e) => handle(e)}
            id="rg"
            value={data.rg}
            type="text"
            placeholder="55.555.555-5"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Número Cartão SUS*</label>
          <InputMask
            mask="999 9999 9999 9999"
            maskChar=""
            value={data.cartaoSus}
            onChange={(e) => handle(e)}
            type="text"
            id="cartaoSus"
            placeholder="000 0000 0000 0000"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Rua</label>
          <input
            onChange={(e) => handle(e)}
            id="rua"
            value={data.rua}
            type="text"
            placeholder="Rua Hermantino Coelho"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Número</label>
          <input
            onChange={(e) => handle(e)}
            id="numero"
            value={data.numero}
            type="text"
            placeholder="100"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Bairro</label>
          <input
            onChange={(e) => handle(e)}
            id="bairro"
            value={data.bairro}
            type="text"
            placeholder="Mansões Santo Antônio"
          />
        </div>
        <div className="cadastrarPacienteItem">
          <label>Complemento</label>
          <input
            onChange={(e) => handle(e)}
            id="complemento"
            value={data.complemento}
            type="text"
            placeholder="AP 102 B"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Cidade</label>
          <input
            onChange={(e) => handle(e)}
            id="cidade"
            value={data.cidade}
            type="text"
            placeholder="Campinas"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Estado</label>
          <select
            onChange={(e) => handle(e)}
            value={data.estado}
            name="estado"
            id="estado"
            className="cadastrarPacienteEstado"
          >
            <option value="">Escolher</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <div className="cadastrarPacienteItem">
          <label>Escola</label>
          <input
            onChange={(e) => handle(e)}
            id="escola"
            value={data.escola}
            type="text"
            placeholder="Unip"
          />
        </div>
        <div className="cadastrarPacienteItem">
          <label>Profissão/Indústria</label>
          <input
            onChange={(e) => handle(e)}
            id="industria"
            value={data.industria}
            type="text"
            placeholder="Programador"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>E-mail</label>
          <input
            onChange={(e) => handle(e)}
            value={data.email}
            type="email"
            id="email"
            placeholder="victor.souza100@aluno.unip.br"
          />
        </div>
        <button className="cadastrarPacienteBotao">Criar</button>
      </form>
    </div>
  );
}
