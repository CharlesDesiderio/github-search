import { useEffect, useState } from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ name, image, link, url }) => {

  const [userData, setUserData] = useState({})

  const getDetails = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setUserData(data)
    })
  }

  useEffect(() => {
    getDetails()
  }, [])


  return (
    // <a href={link}>
    <div className={styles.userCard} >
      <img className={styles.userCardImage} src={image} alt='' />
      <div className={styles.userCardInfo}>
      <a href={link}><h3>{ name }</h3></a>
        <p>{ userData.name }</p>
        { userData.location ? <p>Location: { userData.location }</p> : ''}
        { userData.followers ? <p>Followers: { userData.followers }</p> : '' }
        { userData.following ? <p>Following: { userData.following }</p> : '' }
      </div>
    </div>
    // </a>
  )
}

export default UserCard