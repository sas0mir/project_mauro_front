import React, { useState } from 'react';
import type { ITooltipProps } from './tooltip.props';
import styles from './tooltip.module.scss';
import cn from 'classnames';

const Tooltip: React.FC<ITooltipProps> = ({ text, position = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltip_container}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={cn(styles.tooltip_box, styles[`tooltip_${position}`])}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;