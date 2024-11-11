import "./App.css";
import React, { useState } from "react";
import { FollowCard } from "./FollowCard";

export function App() {
  //Manja estado de userName valor por defecto false = unknown establecido en FollowCard
  // const [userName, setUserName] = useState(false);
  // const name =userName ? 'Srjamess' : 'unknown';

  // const handleUserName =() =>{
  //   setUserName(!userName);
  // }

  const user = [
    {
      name: "James Sanchez",
      userName: "Srjamess",
      isfollowing: true,
    },
    {
      name: "Juan Camilo Mora",
      userName: "jcmlmorav",
      isfollowing: false,
    },
    {
      name: "Marco Marin",
      userName: "marcomarin",
      isfollowing: true,
    },
  ];

  return (
    <section className="App">
      {
        user.map(({ name, userName, isfollowing }) => {
        return (
          <FollowCard 
          hey={userName}
          userName={userName} 
          inicialIsFollowing={isfollowing}
          >
            {name}
          </FollowCard>
        );
        })
      }
    </section>

    // <section className="app">
    //   {/* cildren */}
    //   <FollowCard userName={name} inicialIsFollowing={true}>James Sanchez</FollowCard>
    //   {/* props name */}
    //   <FollowCard userName="jcmlmorav" name="Juan Camilo Mora " />
    //   {/* valores por defecto userName unknown */}
    //   <FollowCard name="Marco Marin " />
    //   <button onClick={handleUserName}>Cambio UserName</button>
    // </section>
  );
}
