import styles from "./nav.module.scss"

interface props {
  currentPage: "veicle" | "work" | "client" | "home"
}

export default function NavigationBar ({currentPage}: props) {

  const paths = [ "home", "work", "client", "veicle"]

  return <>
    <div className={styles.navbar}>
      <a href={`${currentPage}`} >
        <img className={styles.icon} src={`/${currentPage}Icon.png`} alt={currentPage + ' Icon'} />
      </a>

      {paths.map(path => {
        if (path !== currentPage) {
          return <a href={`${path}`} key={path}>
            <img className={styles.icon} src={`/${path}Icon.png`} alt={currentPage + ' Icon'}/>
          </a>
        }
      })}
    </div>
  </>
}