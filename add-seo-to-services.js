// add-seo-to-services.js
// Script to add SEO components to all service pages at once

const fs = require('fs');
const path = require('path');

const services = [
    {
        file: 'ServiceGoogleAds.tsx',
        imports: `import { SEO } from "@/components/SEO";\nimport { BreadcrumbSchema } from "@/components/BreadcrumbSchema";\nimport { FAQSchema } from "@/components/FAQSchema";`,
        seo: `      <SEO
        title="Google Ads Management Services | Expert PPC - Market Integrators"
        description="Maximize ROI with expert Google Ads management. Search, Display, Shopping, and YouTube campaigns optimized for conversions. Get your free audit today."
        canonical="https://www.marketintegrators.com/services/google-ads-management"
        keywords="Google Ads management, Google PPC, search ads, display ads, shopping ads, Performance Max, YouTube ads"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.marketintegrators.com/" },
          { name: "Services", url: "https://www.marketintegrators.com/services" },
          { name: "Google Ads Management", url: "https://www.marketintegrators.com/services/google-ads-management" }
        ]}
      />
      <FAQSchema faqs={faqs} />`,
        faqs: `  const faqs = [
    {
      question: "What is the minimum budget for Google Ads?",
      answer: "We recommend a minimum monthly ad spend of $1,500-$2,000 for meaningful results. This allows enough data to test, optimize, and achieve positive ROI. Smaller budgets are possible but may limit campaign effectiveness and testing capabilities."
    },
    {
      question: "How quickly will I see results from Google Ads?",
      answer: "Google Ads can drive traffic immediately after launch. However, optimal performance typically takes 2-3 months as we gather data, test variations, and refine targeting. Most clients see positive ROI within the first 60-90 days."
    },
    {
      question: "What's the difference between Google Ads and SEO?",
      answer: "Google Ads provides immediate visibility through paid placements at the top of search results, while SEO builds organic rankings over time. Google Ads is ideal for quick wins and testing, while SEO provides long-term, sustainable traffic. The best strategy often combines both."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We require a 3-month initial commitment to properly set up, optimize, and demonstrate results. After that, we offer flexible month-to-month agreements with no long-term lock-in."
    },
    {
      question: "Will I own the Google Ads account?",
      answer: "Yes, all campaigns are set up in your own Google Ads account, which you fully own. We manage the account on your behalf, and you retain 100% ownership and access to all data and campaigns."
    }
  ];`
    },
    // Add more services here...
];

function addSEOToServicePage(servicePath, config) {
    let content = fs.readFileSync(servicePath, 'utf8');

    // 1. Add imports after existing imports (before first const/function)
    const importRegex = /(import.*from.*;\n)(\n*const|export)/;
    if (!content.includes('from "@/components/SEO"')) {
        content = content.replace(importRegex, `$1${config.imports}\n$2`);
    }

    // 2. Add FAQs if provided (before return statement)
    if (config.faqs) {
        const returnRegex = /(  return \()/;
        if (!content.includes('const faqs =')) {
            content = content.replace(returnRegex, `${config.faqs}\n\n$1`);
        }
    }

    // 3. Add SEO components before <Header />
    const headerRegex = /(<div className="min-h-screen[^>]*>\n)(      <Header)/;
    if (!content.includes('<SEO')) {
        content = content.replace(headerRegex, `$1${config.seo}\n$2`);
    }

    fs.writeFileSync(servicePath, content, 'utf8');
    console.log(`✅ Updated: ${path.basename(servicePath)}`);
}

// Process each service
const pagesDir = path.join(__dirname, 'src', 'pages');
services.forEach(service => {
    const filePath = path.join(pagesDir, service.file);
    if (fs.existsSync(filePath)) {
        try {
            addSEOToServicePage(filePath, service);
        } catch (err) {
            console.error(`❌ Error processing ${service.file}:`, err.message);
        }
    } else {
        console.warn(`⚠️  File not found: ${service.file}`);
    }
});

console.log('\n✨ SEO implementation complete!');
