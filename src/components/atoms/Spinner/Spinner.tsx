import classNames from 'classnames';

import type { SpinnerProps } from './types';
import { ImSpinner10 } from 'react-icons/im';

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  spinnerClassName,
  ...otherProps
}) => (
  <div
    className={classNames('flex items-center justify-center', className)}
    {...otherProps}
  >
    <ImSpinner10 
      className={classNames(
        'animate-spin',
        spinnerClassName,
      )}
    />
  </div>
);
