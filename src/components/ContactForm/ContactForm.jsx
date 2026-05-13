import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { showToast } from '../Toast/Toast';
import styles from './ContactForm.module.css';

const schema = z.object({
    name: z.string().min(1, '请输入姓名'),
    email: z.string().min(1, '请输入邮箱').email('邮箱格式不正确'),
    message: z.string().min(1, '请输入留言内容'),
});

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                showToast('感谢你的留言，我会尽快回复！', 'success');
                reset();
            } else {
                showToast('发送失败，请稍后再试。', 'error');
            }
        } catch (error) {
            showToast('网络错误，请检查连接。', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>姓名：</label>
                <input
                    id="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
                    {...register('name')}
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>邮箱：</label>
                <input
                    id="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                    {...register('email')}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>留言：</label>
                <textarea
                    id="message"
                    rows="5"
                    className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
                    {...register('message')}
                />
                {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? '发送中...' : '发送'}
            </button>
        </form>
    );
}