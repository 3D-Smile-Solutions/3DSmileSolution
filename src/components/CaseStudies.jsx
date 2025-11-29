import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './CaseStudies.css';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCaseId, setActiveCaseId] = useState(null);

  const caseStudies = [
    {
      id: 1,
      categories: ['ai', 'dental'],
      tags: [
        { label: 'AI Automation', class: 'tag-ai' },
        { label: 'Dental', class: 'tag-dental' }
      ],
      client: 'Multi-location Dental Group · Southeast U.S. · 6 Locations',
      title: 'Reducing No-Shows and Reclaiming Staff Time with HIPAA-Compliant Automation',
      summary: 'Replaced inconsistent manual processes with unified, compliant patient communication across all locations—freeing front desk staff to focus on patients.',
      industry: 'General & Cosmetic Dentistry',
      engagement: 'AI-Powered Patient Communication',
      timeline: '10 Weeks',
      fullContent: {
        situation: {
          text: [
            'This regional dental group had grown to six locations but was struggling with inconsistent patient communication. Each office handled appointment reminders differently—some relied on manual phone calls, others used basic text features in their practice management software. The result was unpredictable no-show rates and front desk staff spending hours each week chasing confirmations.',
            'Adding to the complexity, staff at several locations had started using personal cell phones to text patients—a well-intentioned workaround that created HIPAA compliance concerns.'
          ],
          quote: {
            text: 'We had no standardized process. One office might call patients, another would text, and sometimes things just fell through the cracks. Our staff was frustrated, and we knew we were losing revenue to no-shows, but we didn\'t have a clear picture of how much.',
            attribution: 'Practice Administrator'
          }
        },
        approach: {
          description: '3D Smile Solutions was engaged to design, implement, and train the team on a unified, HIPAA-compliant patient communication system.',
          phases: [
            {
              number: 1,
              title: 'Discovery & Assessment',
              timeline: 'Weeks 1-2',
              items: [
                'Audited existing communication workflows across all 6 locations',
                'Identified compliance gaps and documentation needs',
                'Mapped integration requirements with practice management system',
                'Defined success metrics with leadership'
              ]
            },
            {
              number: 2,
              title: 'System Architecture & Build',
              timeline: 'Weeks 3-6',
              items: [
                'Selected and implemented a BAA-compliant communication platform',
                'Designed automated reminder sequences (7-day, 3-day, day-of)',
                'Configured two-way texting for confirmations and rescheduling',
                'Built integration layer with practice management system',
                'Established audit logging and role-based access controls'
              ]
            },
            {
              number: 3,
              title: 'Training & Handoff',
              timeline: 'Weeks 7-10',
              items: [
                'Trained front desk staff at each location on the new system',
                'Created standard operating procedures and troubleshooting guides',
                'Conducted go-live support at each location',
                'Established metrics dashboard for ongoing monitoring',
                'Provided 30-day post-launch support'
              ]
            }
          ]
        },
        outcome: {
          description: 'Within the first 90 days, the practice saw meaningful improvements across operations:',
          metrics: [
            { label: 'No-Show Rate', value: 'Decreased noticeably across all locations' },
            { label: 'Staff Time', value: 'Significant time reclaimed from manual calls' },
            { label: 'Confirmation Rate', value: 'Improved substantially with automation' },
            { label: 'Compliance', value: 'Full audit trail and BAAs in place' }
          ],
          quotes: [
            {
              text: 'The difference is night and day. I used to spend half my morning making reminder calls. Now I can actually focus on patients when they walk in the door.',
              attribution: 'Front Desk Lead'
            },
            {
              text: 'What I appreciated most was that they didn\'t just set it up and leave. They made sure our team understood how to use it and what to do if something went wrong. It actually feels like our system now.',
              attribution: 'Practice Administrator'
            }
          ],
          successFactors: [
            {
              title: 'Integration-first approach',
              description: 'The system was designed around their existing practice management software, not bolted on as an afterthought'
            },
            {
              title: 'Location-by-location rollout',
              description: 'Rather than a "big bang" launch, each office was trained and supported individually'
            },
            {
              title: 'Compliance built in',
              description: 'HIPAA requirements were addressed from day one, not retrofitted'
            },
            {
              title: 'True handoff',
              description: 'The internal team owns and operates the system; 3D Smile Solutions is not an ongoing dependency'
            }
          ]
        },
        relatedCases: [4, 5]
      }
    },
    {
      id: 2,
      categories: ['revops', 'medical'],
      tags: [
        { label: 'RevOps', class: 'tag-revops' },
        { label: 'Medical Device', class: 'tag-medical' }
      ],
      client: 'Medical Device Manufacturer · Mid-market · Orthopedic Implants',
      title: 'Building a Single Source of Truth for Revenue',
      summary: 'Unified scattered tools and conflicting data into a single CRM-based revenue system—enabling data-driven decisions for the first time.',
      industry: 'Medical Device Manufacturing',
      engagement: 'Revenue Operations Architecture',
      timeline: '14 Weeks'
    },
    {
      id: 3,
      categories: ['gtm', 'saas'],
      tags: [
        { label: 'GTM Strategy', class: 'tag-gtm' },
        { label: 'Healthcare IT', class: 'tag-saas' }
      ],
      client: 'Healthcare IT SaaS · Patient Engagement Platform',
      title: 'Redesigning the GTM Motion to Reignite Growth',
      summary: 'Diagnosed why deals were stalling, refined ideal customer profile, and rebuilt the sales methodology around how buyers actually buy.',
      industry: 'Healthcare SaaS',
      engagement: 'Go-to-Market Strategy',
      timeline: '12 Weeks'
    },
    {
      id: 4,
      categories: ['revops', 'ai', 'gtm', 'dental'],
      tags: [
        { label: 'Enterprise', class: 'tag-enterprise' },
        { label: 'DSO', class: 'tag-dental' }
      ],
      client: 'Regional DSO · 50+ Locations',
      title: 'Unifying Revenue Operations at Scale',
      summary: 'Built enterprise-wide RevOps infrastructure across 50+ acquired practices—creating visibility, consistency, and a foundation for continued growth.',
      industry: 'Dental Service Organization',
      engagement: 'Enterprise RevOps',
      timeline: '20 Weeks'
    },
    {
      id: 5,
      categories: ['ai', 'medical'],
      tags: [
        { label: 'AI Automation', class: 'tag-ai' },
        { label: 'Primary Care', class: 'tag-medical' }
      ],
      client: 'Primary Care Practice · Family Medicine',
      title: 'From Compliance Gaps to Operational Efficiency in 90 Days',
      summary: 'Identified HIPAA vulnerabilities, implemented compliant systems, and automated patient communication—preparing the practice to scale.',
      industry: 'Family Medicine',
      engagement: 'Compliance & Automation',
      timeline: '12 Weeks'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI Automation' },
    { id: 'revops', label: 'RevOps' },
    { id: 'gtm', label: 'GTM Strategy' }
  ];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.categories.includes(activeFilter));

  const handleCaseClick = (id) => {
    setActiveCaseId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setActiveCaseId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const calendarSection = document.querySelector('.calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeCase = caseStudies.find(cs => cs.id === activeCaseId);

  return (
    <div className="case-studies-page">
      <Navbar />

      {!activeCaseId ? (
        // Hub Page
        <div className="case-studies-hub">
          {/* Hero Section */}
          <section className="case-studies-hero">
            <h1>Real Results for Healthcare Revenue Teams</h1>
            <p>See how we've helped dental practices, medical device companies, and healthcare organizations build HIPAA-compliant revenue engines they own and operate.</p>
          </section>

          {/* Filters */}
          <div className="case-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div className="case-cards-grid">
            {filteredCases.map(caseStudy => (
              <article 
                key={caseStudy.id} 
                className="case-card"
                onClick={() => handleCaseClick(caseStudy.id)}
              >
                <div className="case-card-header">
                  {caseStudy.tags.map((tag, index) => (
                    <span key={index} className={`case-tag ${tag.class}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="case-card-body">
                  <p className="case-card-client">{caseStudy.client}</p>
                  <h3 className="case-card-title">{caseStudy.title}</h3>
                  <p className="case-card-summary">{caseStudy.summary}</p>
                </div>
                <div className="case-card-footer">
                  <span className="case-card-link">
                    Read the full story
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        // Individual Case Study Page
        <div className="case-detail-page">
          {activeCase && activeCase.fullContent && (
            <>
              <section className="case-detail-hero">
                <div className="case-detail-hero-inner">
                  <button className="back-link" onClick={handleBackToHub}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 8H3M7 4l-4 4 4 4"/>
                    </svg>
                    Back to Case Studies
                  </button>
                  
                  <div className="case-detail-meta">
                    {activeCase.tags.map((tag, index) => (
                      <span key={index} className={`case-tag ${tag.class}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  
                  <h1>{activeCase.title}</h1>
                  
                  <p className="case-detail-intro">{activeCase.summary}</p>
                  
                  <div className="case-detail-details">
                    <div className="detail-item">
                      <span className="detail-label">Client</span>
                      <span className="detail-value">{activeCase.client.split('·')[0].trim()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Industry</span>
                      <span className="detail-value">{activeCase.industry}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Engagement</span>
                      <span className="detail-value">{activeCase.engagement}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Timeline</span>
                      <span className="detail-value">{activeCase.timeline}</span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="case-detail-content">
                {/* The Situation */}
                <section className="case-content-section">
                  <h2>The Situation</h2>
                  {activeCase.fullContent.situation.text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  
                  {activeCase.fullContent.situation.quote && (
                    <div className="quote-block">
                      <p className="quote-text">"{activeCase.fullContent.situation.quote.text}"</p>
                      <p className="quote-attribution">— {activeCase.fullContent.situation.quote.attribution}</p>
                    </div>
                  )}
                </section>

                {/* Our Approach */}
                <section className="case-content-section">
                  <h2>Our Approach</h2>
                  <p>{activeCase.fullContent.approach.description}</p>
                  
                  {activeCase.fullContent.approach.phases.map((phase) => (
                    <div key={phase.number} className="phase-block">
                      <div className="phase-header">
                        <span className="phase-number">{phase.number}</span>
                        <span className="phase-title">{phase.title}</span>
                        <span className="phase-timeline">{phase.timeline}</span>
                      </div>
                      <div className="phase-content">
                        <ul>
                          {phase.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </section>

                {/* The Outcome */}
                <section className="case-content-section">
                  <h2>The Outcome</h2>
                  <p>{activeCase.fullContent.outcome.description}</p>
                  
                  <div className="outcome-grid">
                    {activeCase.fullContent.outcome.metrics.map((metric, index) => (
                      <div key={index} className="outcome-item">
                        <p className="outcome-label">{metric.label}</p>
                        <p className="outcome-text">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  {activeCase.fullContent.outcome.quotes.map((quote, index) => (
                    <div key={index} className="quote-block">
                      <p className="quote-text">"{quote.text}"</p>
                      <p className="quote-attribution">— {quote.attribution}</p>
                    </div>
                  ))}
                  
                  <div className="success-factors">
                    <h3>What Made This Work</h3>
                    <ol>
                      {activeCase.fullContent.outcome.successFactors.map((factor, index) => (
                        <li key={index}>
                          <strong>{factor.title}</strong> — {factor.description}
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>
              </div>

              {/* CTA Section */}
              <section className="case-detail-cta">
                <div className="cta-inner">
                  <h2>Ready to See Similar Results?</h2>
                  <p>Let's discuss how we can help your practice build HIPAA-compliant systems that your team owns and operates.</p>
                  <button className="cta-button" onClick={scrollToDemo}>
                    Schedule a Conversation
                  </button>
                </div>
              </section>

              {/* Related Case Studies */}
              {activeCase.fullContent.relatedCases && (
                <section className="related-section">
                  <h2>Related Case Studies</h2>
                  <div className="related-grid">
                    {activeCase.fullContent.relatedCases.map(relatedId => {
                      const relatedCase = caseStudies.find(cs => cs.id === relatedId);
                      return relatedCase ? (
                        <article 
                          key={relatedCase.id} 
                          className="case-card"
                          onClick={() => handleCaseClick(relatedCase.id)}
                        >
                          <div className="case-card-header">
                            {relatedCase.tags.map((tag, index) => (
                              <span key={index} className={`case-tag ${tag.class}`}>
                                {tag.label}
                              </span>
                            ))}
                          </div>
                          <div className="case-card-body">
                            <p className="case-card-client">{relatedCase.client}</p>
                            <h3 className="case-card-title">{relatedCase.title}</h3>
                            <p className="case-card-summary">{relatedCase.summary}</p>
                          </div>
                          <div className="case-card-footer">
                            <span className="case-card-link">
                              Read the full story
                              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 8h10M9 4l4 4-4 4"/>
                              </svg>
                            </span>
                          </div>
                        </article>
                      ) : null;
                    })}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudies;