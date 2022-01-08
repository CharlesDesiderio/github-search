import UserCard from './UserCard'

const Results = ({ data }) => {

  return (
    <div>
      {data.map((item, i) => {
        return <UserCard name={item.login} image={item.avatar_url} link={item.html_url} />
        
      })}
    </div>
  )
}

export default Results