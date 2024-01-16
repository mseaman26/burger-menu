import styles from './burgerMenu.module.css'
import ButtonLine from './burgerButtonLine'

const BurgerMenu = () => {
    return(
        <div className={styles.container}>
            <ButtonLine/>
            <ButtonLine/>
            <ButtonLine/>
        </div>
    )
}

export default BurgerMenu