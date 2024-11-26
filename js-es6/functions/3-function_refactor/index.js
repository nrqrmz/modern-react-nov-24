// convertir las siguientes funciones asincronas de .then usando el formato de async await

import {
  fetchData,
  fetchData1,
  fetchData2,
  getData,
  getUser,
  getUserInfo,
  login,
} from "./fetchers.mock";

// 1)
fetchData()
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncFetchData = async () => {
  // tu codigo aqui
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    throw error;
  }
};

// 2)
getUser(1)
  .then((user) => {
    console.log("Usuario encontrado:", user);
    return JSON.parse(user);
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetUser = async (userId) => {
  // tu codigo aqui
  try {
    const user = await getUser(userId)
    const data = JSON.parse(user)
    return data
  } catch (error) {
    throw error
  }
};

// 3) si las credenciales son incorrectas levantara un error
login("admin", "1234")
  .then((message) => {
    console.log(message);
    return getUserInfo();
  })
  .then((userInfo) => {
    console.log("Información del usuario:", userInfo);
    return userInfo;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncLogin = async (username, password) => {
  // tu codigo aqui
  try {
    const message = await login(username, password)
    const userInfo = await getUserInfo()
    return JSON.parse(userInfo)
  } catch (error) {
    throw error
  }
};

// 4) manejo de errores

getData()
  .then((data) => {
    console.log(data);
    return { data };
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncGetData = async () => {
  // tu ccodigo aqui
  try {
    const data = await getData();
    return { data };
  } catch (error) {
    throw error;
  }
};

// 5)

fetchData1()
  .then((data1) => {
    console.log(data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2);
    return data2;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });

export const asyncFetchData1 = async () => {
  //tu codigo aqui
  try {
    const data1 = await fetchData1();
    return data1;
  } catch (error) {
    throw error;
  }
};

// crear una funcion para realizar fetch utilizando async await, debe recibir un string(url) retornar la respuesta o el error

const fetcherFn = async (url) => {
  //tu codigo aqui
  try {
    const response = await fetch(url)
    const data = await response.json()
  } catch (error) {
    throw error
  }
};
