import React from 'react';
import { Home, ArrowRight } from 'lucide-react';
import PageSEO from '../components/layout/PageSEO';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="not-found-page section-padding" style={{ textAlign: 'center', padding: '8rem 1.5rem' }}>
      <PageSEO
        title="Page Not Found | Monish P"
        description="The requested page could not be found. Return to Monish P's portfolio homepage."
      />
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="404 ERROR"
          title="PAGE NOT FOUND"
          subtitle="The page you are looking for does not exist or may have been moved. Return to the homepage or explore my featured work."
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Button to="/" variant="primary" size="large" icon={Home}>
            Back to Home
          </Button>
          <Button to="/projects" variant="secondary" size="large" icon={ArrowRight}>
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
