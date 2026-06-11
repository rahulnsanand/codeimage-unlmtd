import {Link} from '@codeui/kit';
import type {FlowProps} from 'solid-js';
import * as styles from './ChangelogItem.css';

interface ChangelogItemProps {
  version: string;
  latest: boolean;
  date: Date;
}

export function ChangelogItem(props: FlowProps<ChangelogItemProps>) {
  const formattedDate = () =>
    new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(props.date);

  const tag = () => `v${props.version}`;

  return (
    <div class={styles.item}>
      <div class={styles.metadata}>
        <div class={styles.metadataContent}>
          <div class={styles.metadataVersionBadgeContainer}>
            <div class={styles.metadataVersionBadge({latest: props.latest})}>
              {tag()}
            </div>
          </div>
          <div class={styles.metadataVersionDate}>{formattedDate()}</div>
        </div>
      </div>
      <div class={styles.content}>{props.children}</div>
    </div>
  );
}
