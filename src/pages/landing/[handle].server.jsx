import {useQuery} from '@shopify/hydrogen';
import {Builder, builder} from '@builder.io/react';
import BuilderComponent from '../../components/BuilderComponent.client';
import Layout from '../../components/Layout.server';

export default function Page(props) {
  const content = useQuery('page', async () => {
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
      <BuilderComponent model="page" content={content?.data} />
    </Layout>
  );
}
