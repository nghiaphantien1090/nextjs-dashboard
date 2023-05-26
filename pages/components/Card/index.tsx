import { ReactElement } from "react";
import styles from '../Card/index.module.scss'
export default function index({HeaderCard=<></>,BodyCard,FooterCard=<></>}:{HeaderCard:ReactElement,BodyCard:ReactElement,FooterCard:ReactElement}){
    return(
        <div className={styles.card}>
            <div className={styles.headerCard}>
                {HeaderCard}
            </div>
            <div className={styles.bodyCard}>
                {BodyCard}
            </div>
            <div className={styles.footerCard} >
                {FooterCard}
            </div>
        </div>
    )
}