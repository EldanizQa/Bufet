export const getComments = async () => {
  try {
    const response = await fetch("http://localhost:3050/comments");
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
