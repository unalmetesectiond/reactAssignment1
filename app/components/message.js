"use client";

export default function StatusMessage({ username }) {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = `Ohayou, ${username}-san! ☀️ Ready for a new anime adventure?`;
  } else if (currentHour < 18) {
    greeting = `Konnichiwa, ${username}-kun! Keep binging your favorite anime! 🎥`;
  } else {
    greeting = `Konbanwa, ${username}-sama! Time for a cozy anime night. 🌙`;
  }

  return <p>{greeting}</p>;
}
