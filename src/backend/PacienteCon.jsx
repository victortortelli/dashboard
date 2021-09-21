import axios from "axios";
import { Component } from "react";

const api = axios.create({
  baseURL: "http://localhost:3333/paciente",
});


class PacienteCon extends Component {
  state = {
    pacientes: [],
  };

  constructor() {
    super();
    this.mostrarPacientes();
  }

  mostrarPacientes = async () => {
    let data = await api.get("/").then(({ data }) => data);
    this.setState({ pacientes: data });
  };

  criarPaciente = async (cartaoSus, nome, cpf, rg, dataNasc, rua, bairro, numero, complemento, cidade, estado, escola) => {
    let res = await api.post("/", {
      cartaoSus: cartaoSus,
      nome: nome,
      cpf: cpf,
      rg: rg,
      dataNasc: dataNasc,
      rua: rua,
      bairro: bairro,
      numero: numero,
      complemento: complemento,
      cidade: cidade,
      estado: estado,
      escola: escola,
    });
    console.log(res);
    this.mostrarPacientes();
  };

  deletarPaciente = async (id) => {
    await api.delete(`/${id}`);
    this.mostrarPacientes();
  };

  alterarPaciente = async (id, val) => {
    await api.put(`/${id}`, { nome: val });
    this.mostrarPacientes();
  };

}

export default PacienteCon;