import {VersionStore} from '@codeimage/store/version/version.store';
import {Presence, Motion} from '@motionone/solid';
import {Show} from 'solid-js';
import {provideState} from 'statebuilder';
import * as styles from './FeatureBadge.css';

interface FeatureBadgeProps {
  featureName: string;
  untilSeenTimes: number;
}

export function FeatureBadge(props: FeatureBadgeProps) {
  const versionStore = provideState(VersionStore);

  const feature = versionStore.getFeature(() => props.featureName);

  return null;
}
