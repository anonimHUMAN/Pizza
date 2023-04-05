import "./app.css"
import Card from "./Card"
function App() {
  // Pizza image
  let img1 = "https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png"
  let img2 = "https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-27.png"
  let img3 = "https://cutewallpaper.org/24/pizza-png-transparent/domino39s-pizza-png-transparent-images-png-all.png"
  let img4 = "https://pngimg.com/d/pizza_PNG44077.png"
  let img5 = "https://t3.ftcdn.net/jpg/05/52/92/94/360_F_552929411_FYg0Lqn5RFfzIObt7ri6xcmQSvfPgSYC.jpg"
  let img6 = "https://pngimg.com/d/pizza_PNG44073.png"

  // Pizza title
  let title1 = "Cheese Lovers"
  let title2 = "Lovers"
  let title3 = "Cheese"
  let title4 = "Cheese Lovers"
  let title5 = "Lovers"
  let title6 = "Cheese"

  // costs
  let cost1 = "$21.00"
  let cost2 = "$22.00"
  let cost3 = "$23.00"
  let cost4 = "$24.00"
  let cost5 = "$25.00"
  let cost6 = "$26.00"

  return (
    <div className="home">
      <div className="top">
        <Card img={img1} tit={title1} cost={cost1} />
        <Card img={img2} tit={title2} cost={cost2} />
        <Card img={img3} tit={title3} cost={cost3} />  
      </div>
      <div className="bottom">
        <Card img={img4} tit={title4} cost={cost4} />
        <Card img={img5} tit={title5} cost={cost5} />
        <Card img={img6} tit={title6} cost={cost6} />
      </div>
    </div>
  )
}

export default App