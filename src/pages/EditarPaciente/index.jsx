import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3333/paciente",
});

export default function EditarPaciente() {
  const [data, setData] = useState([]); //para mostrar os dados atuais
  const [dataAtt, setDataAtt] = useState({
    //para enviar para o banco a atualização
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

  function submit(e, sus) {
    const r = window.confirm("Quer atualizar os dados?");
    if (r === true) {
      //para enviar os dados atualizados ao clicar no botão
      e.preventDefault();
      api.put(`/${data.cartaoSus}`, {
        cartaoSus: dataAtt.cartaoSus,
        nome: dataAtt.nome,
        rg: dataAtt.rg,
        dataNasc: dataAtt.dataNasc,
        rua: dataAtt.rua,
        bairro: dataAtt.bairro,
        numero: dataAtt.numero,
        complemento: dataAtt.complemento,
        cidade: dataAtt.cidade,
        estado: dataAtt.estado,
        escola: dataAtt.escola,
        industria: dataAtt.industria,
        genero: dataAtt.genero,
        email: dataAtt.email,
      });
      window.location.reload(false);
    }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setDataAtt(newdata);
  }

  useEffect(() => {
    fetch(`http://localhost:3333/paciente/123123412341234`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div className="editarPacienteWrapper">
      <div className="containerTituloEditarPaciente">
        <h1 className="tituloEditarPaciente">Dados do paciente</h1>
        <Link to={"/paciente/cadastrar"} style={{ textDecoration: "none" }}>
          <button className="buttonCriarPaciente">
            Cadastrar novo paciente
          </button>
        </Link>
        {/* <button className="buttonCriarPaciente">Criar novo</button> */}
      </div>
      <div className="containerPaciente">
        <div className="mostrarPaciente">
          <div className="mostrarPacienteBottom">
            <span className="mostrarPacienteBottomTitulo">Dados Pessoais</span>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Nome:</span>
              <span className="mostrarPacienteBottomId">{data.nome}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Data de nascimento:</span>
              <span className="mostrarPacienteBottomId">{data.dataNasc}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Gênero:</span>
              <span className="mostrarPacienteBottomId">{data.genero}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">RG:</span>
              <span className="mostrarPacienteBottomId">{data.rg}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Número Cartão SUS:</span>
              <span className="mostrarPacienteBottomId">{data.cartaoSus}</span>
            </div>

            <span className="mostrarPacienteBottomTitulo">Endereço</span>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Rua:</span>
              <span className="mostrarPacienteBottomId">{data.rua}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Número:</span>
              <span className="mostrarPacienteBottomId">{data.numero}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Bairro:</span>
              <span className="mostrarPacienteBottomId">{data.bairro}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Cidade:</span>
              <span className="mostrarPacienteBottomId">{data.cidade}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Estado:</span>
              <span className="mostrarPacienteBottomId">{data.estado}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Complemento:</span>
              <span className="mostrarPacienteBottomId">
                {data.complemento}
              </span>
            </div>

            <span className="mostrarPacienteBottomTitulo">
              Informações adicionais
            </span>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Escola:</span>
              <span className="mostrarPacienteBottomId">{data.escola}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Profissão/Indústria:</span>
              <span className="mostrarPacienteBottomId">{data.industria}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">E-mail:</span>
              <span className="mostrarPacienteBottomId">{data.email}</span>
            </div>
          </div>
        </div>

        <div className="atualizarPaciente">
          <form onSubmit={(e) => submit(e, data.cartaoSus)} action="">
            <div className="mostrarPacienteBottom">
              <span className="mostrarPacienteBottomTitulo">
                Dados Pessoais
              </span>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Nome:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="nome"
                  className="inputAtualizacaoUsuario"
                  type="text"
                  placeholder={data.nome}
                  defaultValue={dataAtt.nome}
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Data de nascimento:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="dataNasc"
                  className="inputAtualizacaoUsuario"
                  type="date"
                  placeholder={data.dataNasc}
                  defaultValue={dataAtt.dataNasc}
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Gênero:</span>
                <select
                  onChange={(e) => handle(e)}
                  //value={data.genero}
                  name="genero"
                  id="genero"
                  placeholder={data.genero}
                  defaultvalue={dataAtt.genero}
                  className="inputAtualizacaoUsuario"
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">RG:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="rg"
                  defaultvalue={dataAtt.rg}
                  type="text"
                  placeholder={data.rg}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Número Cartão SUS:</span>
                <InputMask
                  mask="999 9999 9999 9999"
                  maskChar=""
                  dafeultvalue={dataAtt.cartaoSus}
                  onChange={(e) => handle(e)}
                  type="text"
                  id="cartaoSus"
                  placeholder={data.cartaoSus}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <span className="mostrarPacienteBottomTitulo">Endereço</span>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Rua:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="rua"
                  defaultvalue={dataAtt.rua}
                  type="text"
                  placeholder={data.rua}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Número:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="numero"
                  defaultvalue={dataAtt.numero}
                  type="text"
                  placeholder="100"
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Bairro:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="bairro"
                  defaultvalue={dataAtt.bairro}
                  type="text"
                  placeholder={data.bairro}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Cidade:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="cidade"
                  defaultvalue={dataAtt.cidade}
                  type="text"
                  placeholder={data.cidade}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Estado:</span>
                <select
                  onChange={(e) => handle(e)}
                  name="estado"
                  id="estado"
                  className="inputAtualizacaoUsuario"
                  defaultcalue={dataAtt.estado}
                >
                  <option>Escolher</option>
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

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Complemento:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="complemento"
                  defaultvalue={dataAtt.complemento}
                  type="text"
                  placeholder={data.complemento}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <span className="mostrarPacienteBottomTitulo">
                Informações adicionais
              </span>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Escola:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="escola"
                  defaultvalue={dataAtt.escola}
                  type="text"
                  placeholder={data.escola}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">
                  Profissão/Indústria:
                </span>
                <input
                  onChange={(e) => handle(e)}
                  id="industria"
                  defaultvalue={dataAtt.industria}
                  type="text"
                  placeholder={data.industria}
                  className="inputAtualizacaoUsuario"
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">E-mail:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="email"
                  defaultvalue={dataAtt.email}
                  type="text"
                  placeholder={data.email}
                  className="inputAtualizacaoUsuario"
                />
              </div>
            </div>
            <button className="atualizarPacienteButton">Atualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
