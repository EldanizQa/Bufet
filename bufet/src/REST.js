export const getComments = async () => {
  try {
    const response = await fetch("http://localhost:3050/comments");
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sendComments = async (obj) => {
  await fetch("http://localhost:3050/setComments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};

export const deleteComments = async (id) => {
  await fetch(`http://localhost:3050/deleteComments/${id}`, {
    method: "DELETE",
  });
};
