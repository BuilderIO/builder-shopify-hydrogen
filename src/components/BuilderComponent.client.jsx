import {BuilderComponent, builder, Builder} from '@builder.io/react';
import Welcome from './Welcome';

builder.init('cda38653c81344cf8859bd15e4d8e30d');

Builder.registerComponent(Welcome, {
  name: 'Welcome',
});

export default BuilderComponent;
