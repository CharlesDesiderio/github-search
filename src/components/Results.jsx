const Results = ({ data }) => {

  return (
    <div>
      {data.map((item, i) => {
        return <div key={i}>{i + 1} - {item.login}</div>
      })}
    </div>
  )
}

export default Results