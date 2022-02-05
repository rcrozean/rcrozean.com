import { GetStaticPaths } from 'next';

export default function Post({ post }) {
  return <div>What</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false
  };
};
