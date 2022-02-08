import {useQuery, useUrl} from '@shopify/hydrogen';
import {builder, BuilderComponent} from '@builder.io/react';

builder.init('cda38653c81344cf8859bd15e4d8e30d');

export default function Page() {
  // TODO: not working, says not a function
  // const url = useUrl();

  const content = useQuery('landing-page', async () => {
    return await builder
      .get('page', {
        userAttributes: {
          urlPath:
            '/landing/foo' /* TODO: when working, this should be url.pathname */,
        },
      })
      .promise();
  });

  return !content ? (
    'Loading...'
  ) : (
    <BuilderComponent model="page" content={content} />
  );
}
