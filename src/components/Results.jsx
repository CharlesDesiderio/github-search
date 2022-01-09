import UserCard from './UserCard'

import styles from './Results.module.css'

const Results = ({ data }) => {

  return (
    <div className={styles.results}>
      {data.map((item, i) => {
        return <UserCard key={i} name={item.login} image={item.avatar_url} link={item.html_url} url={item.url} />
      })}
    </div>
  )
}

export default Results