"use client";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [loginname, setloginName] = useState("");
  const [loginpassword, setloginPassword] = useState("");
  const [login, setLogin] = useState(false);
  function handleSignup(e: any) {
    e.preventDefault();
    if (password == password1) {
      alert("Regisztráció kész");
      setLogin(true);
    } else {
      alert("A jelszavak nem egyeznek");
    }
  }

  async function handleLogin(e: any) {
    e.preventDefault();
    if (name == loginname && password == loginpassword) {
      await alert("Sikeres bejelentkezés");
      location.href = "/done";
    } else {
      alert("Rossz felhasználónév vagy jelszó");
    }
  }
  return (
    <div className="flex flex-col gap-4  h-screen items-center justify-evenly px-10 ">
      {login == false ? (
        <form
          onSubmit={(e) => handleSignup(e)}
          className="flex flex-col gap-10 items-center w-full"
        >
          <p className="text-xl md:text-2xl font-bold">Regisztráció</p>
          <input
            type="text"
            placeholder="Név"
            id="1"
            className="w-full md:w-1/2 p-2 outline-accent border-2 dark:border-[#333333] border-[#eeeeee] bg-white dark:bg-[#1f1f1f]  rounded-lg text-black dark:text-white"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Jelszó"
            id="2"
            className="w-full md:w-1/2 p-2 outline-accent border-2 dark:border-[#333333] border-[#eeeeee] bg-white dark:bg-[#1f1f1f]  rounded-lg text-black dark:text-white"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Jelszó"
            id="2"
            className="w-full md:w-1/2 p-2 outline-accent border-2 dark:border-[#333333] border-[#eeeeee] bg-white dark:bg-[#1f1f1f]  rounded-lg text-black dark:text-white"
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
          <button className="gradientbg p-1 flex flex-col  justify-center rounded-lg w-full md:w-1/2 xl:w-1/3 self-center  ">
            <span className="w-full h-full p-2 bg-white dark:bg-[#1f1f1f] hover:text-white text-black dark:text-white bg-opacity-100 hover:bg-opacity-0 transition-all ease-in-out duration-300 rounded-md">
              Regisztrálás
            </span>
          </button>
          <div className="flex flex-row gap-2">
            <p>Már van fiókod?</p>
            <button type="button" onClick={() => setLogin(true)}>
              Bejelentkezés
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={(e) => handleLogin(e)}
          className="flex flex-col gap-10 items-center w-full"
        >
          <p className="text-xl md:text-2xl font-bold">Bejelentkezés</p>

          <input
            type="text"
            id="3"
            placeholder="Név"
            className="w-full md:w-1/2 p-2 outline-accent border-2 dark:border-[#333333] border-[#eeeeee] bg-white dark:bg-[#1f1f1f]  rounded-lg text-black dark:text-white"
            required
            onChange={(e) => setloginName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Jelszó"
            id="4"
            className="w-full md:w-1/2 p-2 outline-accent border-2 dark:border-[#333333] border-[#eeeeee] bg-white dark:bg-[#1f1f1f]  rounded-lg text-black dark:text-white"
            required
            onChange={(e) => setloginPassword(e.target.value)}
          />
          <button className="gradientbg p-1 flex flex-col  justify-center rounded-lg w-full md:w-1/2 xl:w-1/3 self-center  ">
            <span className="w-full h-full p-2 bg-white dark:bg-[#1f1f1f] hover:text-white text-black dark:text-white bg-opacity-100 hover:bg-opacity-0 transition-all ease-in-out duration-300 rounded-md">
              Bejelentkezés
            </span>
          </button>
          <div className="flex flex-row gap-2">
            <p>Még nincs fiókod?</p>
            <button type="button" onClick={() => setLogin(false)}>
              Regisztráció
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
