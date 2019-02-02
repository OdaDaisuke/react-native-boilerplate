import { AppRegistry } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'
  
const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
});
AppRegistry.registerComponent('SampleStorybook', () => StorybookUI);
  
export default StorybookUI;