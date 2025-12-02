import { Helmet } from 'react-helmet';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    keywords?: string;
    noindex?: boolean;
}

export const SEO = ({
    title = 'Market Integrators | Digital Solutions Agency',
    description = 'Market Integrators delivers digital solutions across technology, marketing, and creative studio',
    canonical = 'https://www.marketintegrators.com/',
    ogImage = 'https://www.marketintegrators.com/src/assets/marketintegrators-logo-transparent.webp',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    keywords,
    noindex = false,
}: SEOProps) => {
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonical} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Market Integrators" />

            {/* Twitter Card */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@marketintegrators" />
            <meta name="twitter:creator" content="@marketintegrators" />
        </Helmet>
    );
};
