import styles from "../styles/Recomendation.module.css";
function Recommendation() {
    return (
        <div className={styles.recomendation__main}>
        <div className={styles.recomendation__header}><h1>Get recommendation</h1></div>
        <div className={styles.recommendation__header2}>See recommendations for&nbsp;
        <div className={styles.dropdown}>
        <a className={styles.recommendation__link1}><u>Lucy Ann</u></a>
                    <div className={styles.dropdown_content}>
                        <a href="#">User 1</a>
                        <a href="#">User 2</a>
                        <a href="#">User 3</a>
                        <a href="#">User 4</a>
                        <a href="#">User 5</a>
                        <a href="#">User 6</a>
                    </div>
                </div> 
                </div>
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
