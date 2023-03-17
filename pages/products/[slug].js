import { sanityClient } from '../../lib/sanity';
import Image from 'next/image';


export async function getStaticPaths() {
  const query = `*[_type == "product"]{
    slug
  }`;
  
  const products = await sanityClient.fetch(query);
  console.log(products);
  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));
t
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    description,
    "image": mainImage.asset->url,
    features[]{
      "image": icon.asset->url,
      name,
      description
    }
  }`;

  const data = await sanityClient.fetch(query, { slug: params.slug });

  return {
    props: { product: data },
  };
}


export default function Product({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Image src={product.image} alt={product.title} width={800} height={400} quality={1} />
      <ul>
        {product.features.map((feature) => (
          <li key={feature.name}>
            {/* <Image src={feature.image} alt={feature.name} width={50} height={50} /> */}
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  