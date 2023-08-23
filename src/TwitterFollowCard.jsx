import { useState } from 'react' 

export function TwitterFollowCard({userName, name}){
  const [isFollowing, setIsFollowing] = useState(false)

  const Text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'siguiendo' : 'sinSeguir'

  const handleClick = () => {
    setIsFollowing (!isFollowing)
  }

  return(
    <article>
      <header>
        <img alt='jose' src ='https://img.freepik.com/fotos-premium/posesion-aleatoria-monstruos-mas-detallado-colorido-brutal-2_811077-4.jpg?w=2000' width='350px'/>
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
          </div>
          
      </header>

      <aside>
        <button className={buttonClassName} onclick={handleClick}> 
         {Text} 
        </button>
      </aside>
    </article>
  )
}