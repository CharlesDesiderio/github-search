import styles from './UserCard.module.css'

const UserCard = ({ name, image, link }) => {
  return (
    <a href={link}>
    <div className={styles.userCard} >
      <img className={styles.userCardImage} src={image} alt='' />
      <h3>{name}</h3>
      
    </div>
    </a>
  )
}

export default UserCard