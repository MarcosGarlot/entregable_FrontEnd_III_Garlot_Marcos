const Card = ({datos}) => {
  return (
    <div className="card">
      <h6>Cliente N°{datos.id}</h6>
      <h1>Nombre : {datos.nombre}</h1>
      <h4>Artista : {datos.artista}</h4>
    </div>
  )
}

export default Card