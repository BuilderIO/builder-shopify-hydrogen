import {useQuery} from '@shopify/hydrogen';
import {builder} from '@builder.io/react';
import {RenderContent} from '../../builder/RenderContent.server';
import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
import Welcome from '../../components/Welcome.server';
import {registerComponent} from '../../builder/register-component';

registerComponent(Welcome, {
  name: 'Welcome',
});

const MODEL_NAME = 'page';

const HARD_CODED_CONTENT = {
  data: {
    data: {
      blocks: [
        {
          component: {
            name: 'Welcome',
            options: {},
          },
        },
      ],
    },
  },
};

export default function Page(props) {
  const content =
    HARD_CODED_CONTENT ||
    useQuery([MODEL_NAME, props.pathname], async () => {
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
        <RenderContent model={MODEL_NAME} content={content?.data} />
      )}
    </Layout>
  );
}
