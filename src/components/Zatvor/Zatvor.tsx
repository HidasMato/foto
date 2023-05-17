import React, { useState } from 'react';
import style from './Zatvor.module.scss';
import im from '../../the-witcher-wild-hunt-4k-2020-iphone-8-plus.jpg';

type AlertProps = {
};
const Zatvor = ({ }: AlertProps): JSX.Element => {
    let wait = true;
    const A1 = (A: HTMLElement, time: number) => {
        if (wait) {
            wait = false;
            A.classList.add(style.AdOpen);
            A.classList.add(style.AdOpenProcess);
            A.classList.remove(style.AdClose);
            A.classList.remove(style.AdCloseProcess);
            setTimeout(() => { wait = true }, 1000);
        } else {
            if (time < 4) {
                setTimeout(A1, 500, A, time + 1);
            }
        }
    }
    const A2 = (A: HTMLElement, time: number) => {
        if (wait) {
            wait = false;
            A.classList.add(style.AdClose);
            A.classList.add(style.AdCloseProcess);
            A.classList.remove(style.AdOpen);
            A.classList.remove(style.AdOpenProcess);
            setTimeout(() => { wait = true }, 1000);
        } else {
            if (time < 5) {
                setTimeout(A2, 500, A, time + 1);
            }
        }
    }
    return (
        <div className={style.Main}>
            <div className={style.Container} onMouseEnter={() => {
                const A = document.getElementById('123');
                if(A) {A1(A, 0)}
            }}
                onMouseLeave={() => {
                const A = document.getElementById('123');
                if(A) {A2(A, 0)}
            }}
            >
                <div id='123' className={style.Ad + " " + style.AdClose} >
                    <div className={style.Tre + " " + style.T0}></div>
                    <div className={style.Tre + " " + style.T1}></div>
                    <div className={style.Tre + " " + style.T2}></div>
                    <div className={style.Tre + " " + style.T3}></div>
                    <div className={style.Tre + " " + style.T4}></div>
                    <div className={style.Tre + " " + style.T5}></div>
                </div>
                <div className={style.Circle + " " + style.Circle1}></div>
                <div className={style.Circle + " " + style.Circle2}></div>
                <div className={style.Circle + " " + style.Circle3}></div>
                <div className={style.Circle + " " + style.Circle4}></div>
                <div className={style.Circle + " " + style.Circle5}></div>
            </div>
        </div>
    );
};
export default Zatvor;