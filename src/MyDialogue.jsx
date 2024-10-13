import { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import styles from './css/MyDialogue.module.css';

function MyDialogue() {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);

    const classNames ={

        enter: styles['my-modal-enter'],
        enterActive: styles['my-modal-enter-active'],
        exit: styles['my-modal-exit'],
        exitActive: styles['my-modal-exit-active']
    }

    return (
        <>
            <a href="#" onClick={() => setInProp(true)}>Open Demo Modal</a>
            
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={1000} classNames={classNames} unmountOnExit>
                    <div className={styles['modal-wrapper']} ref={nodeRef}>
                        <div className={styles.modal}>
                            <h3>My dialogue</h3>
                            <p>The sun sets gently over the horizon, <br/> painting the sky in shades<br/> of orange, pink, and purple.</p>
                            <p><a href="#" onClick={() => setInProp(false)}>OK</a> <a href="#" onClick={() => setInProp(false)}>Close</a></p>
                        </div>
                    </div>
            </CSSTransition>
        </>
    );
}

export default MyDialogue;