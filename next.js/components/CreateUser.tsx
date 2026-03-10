"use client";

export const CreateUser = () => {
  const handleClick = async () => {
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "text@texttext.com",
        }),
      });

      const data = await res.json();
      console.log("User created:", data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return <button onClick={handleClick}>Welcome</button>;
};
