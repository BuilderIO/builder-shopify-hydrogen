function ExternalIcon() {
  return (
    <svg
      className="ml-3"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M8.11963 0.000976562C7.56734 0.000976562 7.11963 0.448692 7.11963 1.00098C7.11963 1.55326 7.56734 2.00098 8.11963 2.00098H10.7054L4.41252 8.29387C4.022 8.68439 4.022 9.31756 4.41252 9.70808C4.80305 10.0986 5.43621 10.0986 5.82674 9.70808L12.1196 3.41519V6.00098C12.1196 6.55326 12.5673 7.00098 13.1196 7.00098C13.6719 7.00098 14.1196 6.55326 14.1196 6.00098V1.00098C14.1196 0.448692 13.6719 0.000976562 13.1196 0.000976562H8.11963Z" />
      <path d="M2.11963 2.00098C1.01506 2.00098 0.119629 2.89641 0.119629 4.00098V12.001C0.119629 13.1055 1.01506 14.001 2.11963 14.001H10.1196C11.2242 14.001 12.1196 13.1055 12.1196 12.001V9.00098C12.1196 8.44869 11.6719 8.00098 11.1196 8.00098C10.5673 8.00098 10.1196 8.44869 10.1196 9.00098V12.001H2.11963V4.00098L5.11963 4.00098C5.67191 4.00098 6.11963 3.55326 6.11963 3.00098C6.11963 2.44869 5.67191 2.00098 5.11963 2.00098H2.11963Z" />
    </svg>
  );
}

function DocsButton({url, label}) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-white shadow py-2 px-5 rounded-full inline-flex items-center hover:opacity-80"
      rel="noreferrer"
    >
      {label}
      <ExternalIcon />
    </a>
  );
}

/**
 * A shared component that displays the content on the homepage of the Hydrogen app
 */
export default function Welcome() {
  return (
    <div className="text-gray-900 pt-16 rounded-[40px] my-16 px-4 xl:px-12 bg-gradient-to-b from-white -mx-4 xl:-mx-12">
      <div className="text-center mb-16">
        <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">
          Hello, Hydrogen
        </h1>
        <p className="text-lg mb-8">
          Welcome to your custom storefront. Let&rsquo;s get building.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-gray-700">
          <DocsButton
            url="https://shopify.dev/custom-storefronts/hydrogen"
            label="Browse Hydrogen documentation"
          />
          <DocsButton url="/graphql" label="Open the GraphiQL explorer" />
          <DocsButton
            url="https://github.com/Shopify/hydrogen-examples"
            label="Explore Hydrogen examples"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"></div>
    </div>
  );
}
