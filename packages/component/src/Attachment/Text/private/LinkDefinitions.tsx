import { hooks } from 'botframework-webchat-api';
import {
  isOrgSchemaThingAsEntity,
  isOrgSchemaThingOf,
  onErrorResumeNext,
  type OrgSchemaAsEntity,
  type OrgSchemaClaim,
  type WebChatActivity
} from 'botframework-webchat-core';
import classNames from 'classnames';
import { type Definition } from 'mdast';
// @ts-expect-error TS1479 should be fixed when bumping to typescript@5.
import { fromMarkdown } from 'mdast-util-from-markdown';
import React, { memo } from 'react';

import useStyleSet from '../../../hooks/useStyleSet';
import Chevron from './Chevron';
import CitationItem from './CitationItem';
import URLItem from './URLItem';

const { useLocalizer } = hooks;

type Props = Readonly<{
  entities: WebChatActivity['entities'];
  markdown: string;
  onCitationClick?: (url: string) => void;
}>;

const REFERENCE_LIST_HEADER_IDS = {
  one: 'REFERENCE_LIST_HEADER_ONE',
  few: 'REFERENCE_LIST_HEADER_FEW',
  many: 'REFERENCE_LIST_HEADER_MANY',
  other: 'REFERENCE_LIST_HEADER_OTHER',
  two: 'REFERENCE_LIST_HEADER_TWO'
};

function isCitation(url: string): boolean {
  return onErrorResumeNext(() => new URL(url).protocol) === 'cite:';
}

function isClaim(entity: unknown): entity is OrgSchemaAsEntity<OrgSchemaClaim> {
  return isOrgSchemaThingAsEntity(entity) && isOrgSchemaThingOf<OrgSchemaClaim>(entity, 'Claim');
}

const LinkDefinitions = memo(({ entities, markdown, onCitationClick }: Props) => {
  const [{ linkDefinitions }] = useStyleSet();
  const definitions = fromMarkdown(markdown).children.filter((node): node is Definition => node.type === 'definition');
  const localizeWithPlural = useLocalizer({ plural: true });

  const headerText = localizeWithPlural(REFERENCE_LIST_HEADER_IDS, definitions.length);

  return definitions.length > 0 ? (
    <details className={classNames(linkDefinitions, 'webchat__link-definitions')} open={true}>
      <summary className="webchat__link-definitions__header">
        {headerText} <Chevron />
      </summary>
      <div className="webchat__link-definitions__list" role="list">
        {definitions.map(definition => {
          const claim = entities
            .filter<OrgSchemaAsEntity<OrgSchemaClaim>>(isClaim)
            .find(({ '@id': id }) => id === definition.url);

          return (
            <div className="webchat__link-definitions__list-item" key={definition.identifier} role="listitem">
              {isCitation(definition.url) ? (
                <CitationItem
                  claim={claim}
                  identifier={definition.identifier}
                  onClick={onCitationClick}
                  title={definition.title || undefined}
                  url={definition.url}
                />
              ) : (
                <URLItem
                  claim={claim}
                  identifier={definition.identifier}
                  title={definition.title || undefined}
                  url={definition.url}
                />
              )}
            </div>
          );
        })}
      </div>
    </details>
  ) : null;
});

LinkDefinitions.displayName = 'LinkDefinitions';

export default LinkDefinitions;
