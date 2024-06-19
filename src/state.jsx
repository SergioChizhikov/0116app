const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ о себе и своей жизни",
};

const users = {
  0: { name: "Джон", lastname: "Даккет" },
  1: { name: "Кайл", lastname: "Симпсон" },
  2: { name: "Мария", lastname: "Шарапова" },
  3: { name: "Костя", lastname: "Петров" },
};


export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
