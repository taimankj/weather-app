export const storage = {
  saveTemp(temp) {
    localStorage.setItem("temp", `${temp}`);
  },
  getTemp() {
    return localStorage.getItem("temp");
  },
};
