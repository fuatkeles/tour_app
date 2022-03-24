

const Card = (data) => {
  return (
    <div className = "cards">
        <div className="title">
            <h1>{data.title}</h1>
        </div>
        {/* Resimlerin geldiği yer */}
        <img src={data.image} alt="" />
        <div className="card-over">
            <p>
                {/*Açıklamaların geldiği yer */}
                {data.desc}
            </p>
        </div>
    </div>
  )
}

export default Card
