import { useState } from "react";

export function FollowCard({ children, userName = `unknown`, name, inicialIsFollowing }) {
  const addAt = (userName) => `@${userName}`;

  //Manejo de estados para el boton seguir, "inicialIsFollowing" se pasa por props y establece el estado inicial si se 
  //esta siguiendo o no
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";

  //Estilos del boton, Majeno de estados
  const buttonClassName = isFollowing
    ? "tw-follow-button following"
    : "tw-follow-button ";

  //Cambia el estado del boton
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  console.log(name, isFollowing);

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>
            {children}
            {name}
          </strong>
          <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
