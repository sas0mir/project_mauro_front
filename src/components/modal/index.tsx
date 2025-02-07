import { FC, memo } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import styles from './modal.module.scss';
import classNames from 'classnames';
import { IModalProps } from './modal.props';
import { IoClose } from "react-icons/io5";

const Modal: FC<IModalProps> = memo(({ isOpen, onClose, children }) => {

    const theme = useSelector((state: RootState) => state.settings.theme);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={classNames(styles.modal_overlay, styles[`modal_${theme}`])} onClick={onClose}>
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal_close_button} onClick={onClose}>
                <IoClose />
            </button>
            {children}
        </div>
        </div>,
        document.body
    );
});

export default Modal;