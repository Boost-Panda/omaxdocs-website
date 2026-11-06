import withMDX from '@next/mdx';

const withMDXObj = withMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  images: { unoptimized: true },
};

export default withMDXObj(nextConfig);
