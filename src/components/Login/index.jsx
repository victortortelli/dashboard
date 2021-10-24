import { React, useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useHistory } from "react-router";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const redirectLogin = ({role}) => {
    history.push(`home/${role}`);
  };

  const trataErroLogin = () => {
    alert("Usuário ou senha errados!");
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
  }

  function submit(e) {
    e.preventDefault();
     api
      .post("/login", {
        username: login.username,
        password: login.password,
      })
      .then((response) => {
        console.log(response.data)
        if (response.data != null){
          redirectLogin(response.data);
        }
        else{
          trataErroLogin();
        }
      });
  }

  function handle(e) {
    const newdata = { ...login };
    newdata[e.target.id] = e.target.value;
    setLogin(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <div className="user-login">
      <h1 className="user-login-title">Login</h1>
      <form>
        <div className="user-login-form-control">
          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={(e) => {
              handle(e)
            }}
          />
        </div>
        <div className="user-login-form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              handle(e)
            }}
          />
        </div>
        <button
          type="submit"
          theme="contained-green"
          className="user-login-submit-button"
          onClick={submit}
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
}
