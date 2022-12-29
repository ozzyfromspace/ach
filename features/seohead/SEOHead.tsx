import Head from 'next/head';
import defaultKeywords from './defaultKeywords';

interface Props {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  children?: React.ReactNode;
}

const SEOHead = (props: Props) => {
  const { children, title, keywords, description, author } = props;
  const computedKeywords = `${defaultKeywords.join(' ')}${
    !!keywords.length ? ' ' : ''
  }${keywords.join(' ')}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={computedKeywords} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {children}
    </Head>
  );
};

SEOHead.defaultProps = {
  keywords: [],
};

export default SEOHead;
