import styles from "./nav.module.scss"

interface props {
  currentPage: "veicle" | "service" | "client" | "home"
}

export default function NavigationBar ({currentPage}: props) {

  const paths = [ "veicle", "service", "client", "home" ]

  return <>
    <div className={styles.navbar}>
      <a href={`${currentPage}`}>
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