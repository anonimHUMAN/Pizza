function Card(a) {
  return (
    <div className="card">
        <img src={a.img} />
        <h1>{a.tit}</h1>
        <p>lorem hewbb befw lorem hewbb befw lorem hewbb befw lorem hewbb befw</p>
        <h2>{a.cost}</h2>
        <select>
            <option>Regular</option>
            <option>Regular</option>
            <option>Regular</option>
            <option>Regular</option>
        </select><br />
        <button>ADD TO CARD</button>
    </div>
  )
}

export default Card