import { useRecoilValue } from "recoil";
import { todoStatsState } from "store/todo";
import styles from './index.module.css';

const Stats = () => {
    const { all, active, donePercentage } = useRecoilValue(todoStatsState);

    return (
        <section className={styles.container}>
            {!!all && <span>Total: {all}</span>}
            {!!active && active !== all && <span>{active} more to go</span>}
            {!!donePercentage && <span>{donePercentage % 1 === 0 ? donePercentage : donePercentage.toFixed(2)}% completed</span>}
        </section>
    )
}

export default Stats
