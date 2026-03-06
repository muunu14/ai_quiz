"use client";
export const CreateUser = () => {
  const handleClick = async () => {
    const user = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify({
        email: "text@texttext.com",
        id: "2",
      }),
    });
    console.log(user);
  };
  return <button onClick={handleClick}>Click Button</button>;
};
