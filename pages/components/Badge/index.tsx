import { CSSProperties } from 'react';
import styles from '../Badge/index.module.scss'
export default function Index({content,cssProps={}}:{content:string;cssProps:CSSProperties}){
    return(
        <div className={'round-pill justify-contents-center ' + styles.badge} style={cssProps}>
            <p style={{marginBottom:'0px'}}>
                {content}
            </p>
        </div>
    )
}