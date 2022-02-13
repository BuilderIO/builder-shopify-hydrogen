import {useQuery} from '@shopify/hydrogen';
import {Builder, builder} from '@builder.io/react';
import BuilderComponent from '../../components/BuilderComponent.client';
import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

const MODEL_NAME = 'page';

export default function Page(props) {
  const content = useQuery([MODEL_NAME, props.pathname], async () => {
    return await builder
      .get(MODEL_NAME, {
        userAttributes: {
          urlPath: props.pathname,
        },
      })
      .promise();
  });

  const params = new URLSearchParams(props.search);
  const isPreviewing = params.has('builder.preview');

  return (
    <Layout>
      {!content.data && !isPreviewing ? (
        <NotFound />
      ) : (
        <BuilderComponent model={MODEL_NAME} content={content?.data} />
      )}
    </Layout>
  );
}
