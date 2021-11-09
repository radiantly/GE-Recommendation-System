import styles from "../styles/Recomendation.module.css";
function Recommendation() {
    return (
        <div className={styles.recomendation__main}>
        <div className={styles.recomendation__header}><h1>Get recommendation</h1></div>
        <div className={styles.recommendation__header2}>See recommendations for&nbsp; <div className={styles.recommendation__link}><u>Lucy Ann</u></div></div>
        <div className={styles.recommendation__squarer1}>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>  
        <div className={styles.recommendation__square}></div> 
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div> 
        <div className={styles.recommendation__square}></div>
        <div className={styles.recommendation__square}></div></div>   
        </div>
    )
}

export default Recommendation
