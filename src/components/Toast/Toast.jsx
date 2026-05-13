import { useState, useEffect, useCallback } from 'react';
import styles from './Toast.module.css';

let showToastFunction;

export function showToast(message, type = 'success', duration = 3000) {
    if (showToastFunction) {
        showToastFunction(message, type, duration);
    }
}

export default function ToastContainer() {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type, duration) => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, duration);
    }, []);

    useEffect(() => {
        showToastFunction = addToast;
        return () => { showToastFunction = undefined; };
    }, [addToast]);

    return (
        <div>
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`${styles.toast} ${styles[toast.type]}`}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
}