import { PanelPlugin } from '@grafana/data';
import { JsonTextPanel } from './JsonTextPanel';

export const plugin = new PanelPlugin<PannerOptions>(JsonTextPanel).setPanelOptions(builder => {
  return builder
});
