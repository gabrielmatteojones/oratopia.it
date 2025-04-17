// functions/getData.js

exports.handler = async function(event, context) {
  // Dati mockati
  const users = [
    { name: "Mario Rossi", email: "mario@esempio.com" },
    { name: "Luigi Bianchi", email: "luigi@esempio.com" },
    { name: "Giovanna Verdi", email: "giovanna@esempio.com" }
  ];
  const posts = [
    { title: "Post 1", content: "Contenuto del post 1" },
    { title: "Post 2", content: "Contenuto del post 2" },
    { title: "Post 3", content: "Contenuto del post 3" }
  ];
  const pages = [
    { title: "Pagina 1", url: "/pagina-1" },
    { title: "Pagina 2", url: "/pagina-2" },
    { title: "Pagina 3", url: "/pagina-3" }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify({ users, posts, pages }),
  };
};
