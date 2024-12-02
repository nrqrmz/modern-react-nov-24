export default function QuoteCard({quote, author}) {
  return (
    <div className="card-quote">
      <h4>{quote}</h4>
      <p>{author}</p>
    </div>
  )
}
