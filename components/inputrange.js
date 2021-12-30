import Styles from '@/styles/InputRange.module.scss'
export default function InputRange ({min="unset",max="unset",step="unset",value,onchange,unit}) {
    return (
        <div className={Styles.wrapper}>
            <label className={Styles.inputNumberWrapper}>
                <input type="number" min={min} max={max} value={value} step={step} onChange={onchange} className={Styles.inputNumber}/>{unit}
            </label>
            <label className={Styles.inputRangeWrapper}>
                <input type="range" min={min} max={max} step={step} value={value} onChange={onchange}/>
            </label>
        </div>
    )
}