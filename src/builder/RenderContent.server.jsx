import {getComponentOptions, getComponentRef} from './register-component';

export function RenderContent({content}) {
  if (!content?.data?.blocks) {
    return null;
  }

  // TODO: small client component for tracking
  return content.data.blocks.map((block, index) => (
    <RenderBlock key={block.id || index} block={block} />
  ));
}

export function RenderBlock({block}) {
  const ComponentRef = getComponentRef(block.component?.name);

  // TODO
  const TagName = block.tagName || 'div';
  const noWrap = getComponentOptions();

  if (!ComponentRef) {
    console.warn(
      `No component found for ${block.component?.name} with id ${block.id}`,
    );
    return null;
  }

  return <ComponentRef {...block.component.options} />;
}
