import { hooks } from 'botframework-webchat-api';
import classNames from 'classnames';
import React, { Children, memo, type ReactNode } from 'react';

import useStyleSet from '../hooks/useStyleSet';
import Chevron from './private/Chevron';

const { useLocalizer } = hooks;

type Props = Readonly<{
  children?: ReactNode | undefined;
}>;

const REFERENCE_LIST_HEADER_IDS = {
  one: 'REFERENCE_LIST_HEADER_ONE',
  few: 'REFERENCE_LIST_HEADER_FEW',
  many: 'REFERENCE_LIST_HEADER_MANY',
  other: 'REFERENCE_LIST_HEADER_OTHER',
  two: 'REFERENCE_LIST_HEADER_TWO'
};

const LinkDefinitions = memo(({ children }: Props) => {
  const [{ linkDefinitions }] = useStyleSet();
  const localizeWithPlural = useLocalizer({ plural: true });

  const headerText = localizeWithPlural(REFERENCE_LIST_HEADER_IDS, Children.count(children));

  return (
    <details className={classNames(linkDefinitions, 'webchat__link-definitions')} open={true}>
      <summary className="webchat__link-definitions__header">
        {headerText} <Chevron />
      </summary>
      <div className="webchat__link-definitions__list" role="list">
        {Children.map(children, child => (
          <div className="webchat__link-definitions__list-item" role="listitem">
            {child}
          </div>
        ))}
      </div>
    </details>
  );
});

LinkDefinitions.displayName = 'LinkDefinitions';

export default LinkDefinitions;