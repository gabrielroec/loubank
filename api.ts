import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchUserData = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
};

export const fetchAccounts = async () => {
  try {
    const response = await api.get("/user");
    return response.data.accounts;
  } catch (error) {
    console.error("Erro ao buscar contas do usuário:", error);
    throw error;
  }
};

export const fetchTotalBalance = async () => {
  try {
    const response = await api.get("/user");
    return response.data.totalBalance;
  } catch (error) {
    console.error("Erro ao buscar saldo total:", error);
    throw error;
  }
};

export default api;
