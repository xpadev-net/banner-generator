import Styles from '@/styles/InputRange.module.scss'
import {useState} from "react";
export default function InputRange ({min="unset",max="unset",step="unset",value,defaultValue=0,onchange,unit,itemid=null}) {
    if (value){
        return (
            <div className={Styles.wrapper}>
                <label className={Styles.inputNumberWrapper}>
                    <input type="number" min={min} max={max} value={value} step={step} onChange={onchange} className={Styles.inputNumber} id={itemid?itemid:""}/>{unit}
                </label>
                <label className={Styles.inputRangeWrapper}>
                    <input type="range" min={min} max={max} step={step} value={value} onChange={onchange} id={itemid?itemid:""}/>
                </label>
            </div>
        )
    }else{
        const [localValue,setLocalValue] = useState(defaultValue);
        const localOnChange = (e) => {
            setLocalValue(e.target.value);
            onchange(e);
        }
        return (
            <div className={Styles.wrapper}>
                <label className={Styles.inputNumberWrapper}>
                    <input type="number" min={min} max={max} value={localValue} step={step} onChange={localOnChange} className={Styles.inputNumber} id={itemid?itemid:""}/>{unit}
                </label>
                <label className={Styles.inputRangeWrapper}>
                    <input type="range" min={min} max={max} step={step} value={localValue} onChange={localOnChange} id={itemid?itemid:""}/>
                </label>
            </div>
        )
    }
}