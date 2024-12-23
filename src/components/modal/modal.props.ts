import { ReactNode } from "react";

export interface IModalProps {
    isOpen: boolean; // Отображать модалку или нет
    onClose: () => void; // Закрытие модалки
    children: ReactNode; // Контент внутри модалки
}