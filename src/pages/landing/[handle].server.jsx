import {useQuery} from '@shopify/hydrogen';
import {builder} from '@builder.io/react';
import BuilderComponent from '../../components/BuilderComponent.client';
import Layout from '../../components/Layout.server';

export default function Page(props) {
  const content = useQuery('landing-page', async () => {
    return await builder
      .get('page', {
        userAttributes: {
          urlPath: props.pathname,
        },
      })
      .promise();
  });

  return (
    <Layout>
      {!content ? (
        'Loading...'
      ) : (
        <BuilderComponent model="page" content={content} />
      )}
    </Layout>
  );
}
