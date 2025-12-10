import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './CaseStudies.css';

const CaseStudies = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      slug: 'dental-group-no-shows-automation',
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
      slug: 'medical-device-revenue-operations',
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
      timeline: '14 Weeks',
      fullContent: {
        situation: {
          text: [
            'This mid-market orthopedic implant manufacturer had grown rapidly through a combination of direct sales and distributor partnerships. But their revenue data was scattered across Salesforce, Excel spreadsheets, ERP systems, and email threads—making it nearly impossible to get a clear picture of pipeline health or forecast accuracy.',
            'The sales team was manually updating multiple systems, leading to data inconsistencies and hours of wasted time each week. Leadership couldn\'t confidently answer basic questions like "What\'s our win rate by territory?" or "Which distributors are underperforming?"'
          ],
          quote: {
            text: 'We were flying blind. Every forecast meeting started with 30 minutes of arguing about whose numbers were right. We knew we needed one system that everyone trusted, but we didn\'t know where to start.',
            attribution: 'VP of Sales'
          }
        },
        approach: {
          description: '3D Smile Solutions conducted a comprehensive revenue operations assessment and designed a unified architecture centered around Salesforce as the single source of truth.',
          phases: [
            {
              number: 1,
              title: 'Current State Assessment',
              timeline: 'Weeks 1-3',
              items: [
                'Mapped all existing revenue systems and data flows',
                'Interviewed sales, operations, and finance stakeholders',
                'Identified data integrity issues and workflow bottlenecks',
                'Documented reporting requirements across departments',
                'Defined data governance standards and ownership'
              ]
            },
            {
              number: 2,
              title: 'Architecture Design & Build',
              timeline: 'Weeks 4-10',
              items: [
                'Redesigned Salesforce architecture for medical device sales cycle',
                'Built custom objects for distributor management and territory planning',
                'Integrated ERP system for order fulfillment visibility',
                'Created automated workflows for quote-to-cash process',
                'Developed executive dashboards and pipeline reports',
                'Established data validation rules and automation'
              ]
            },
            {
              number: 3,
              title: 'Migration & Enablement',
              timeline: 'Weeks 11-14',
              items: [
                'Migrated historical data with quality checks',
                'Trained sales team on new processes and workflows',
                'Created documentation and quick-reference guides',
                'Established ongoing governance model',
                'Conducted post-launch optimization sessions'
              ]
            }
          ]
        },
        outcome: {
          description: 'The company now operates from a single, trusted revenue system that serves sales, operations, and leadership:',
          metrics: [
            { label: 'Data Entry Time', value: 'Reduced by 60% through automation' },
            { label: 'Forecast Accuracy', value: 'Improved to 92% within 3 months' },
            { label: 'Report Generation', value: 'From hours to minutes with dashboards' },
            { label: 'System Adoption', value: '100% across sales organization' }
          ],
          quotes: [
            {
              text: 'For the first time in years, I can trust what I\'m seeing in the system. We\'re making decisions based on data, not gut feel.',
              attribution: 'VP of Sales'
            },
            {
              text: 'The integration with our ERP was a game-changer. We can now track an opportunity from first conversation through manufacturing and delivery—all in one place.',
              attribution: 'Operations Manager'
            }
          ],
          successFactors: [
            {
              title: 'Medical device expertise',
              description: 'Understanding the unique sales cycle, regulatory requirements, and distributor dynamics'
            },
            {
              title: 'Change management focus',
              description: 'Extensive training and documentation ensured adoption across the organization'
            },
            {
              title: 'Phased implementation',
              description: 'Rolled out functionality incrementally to minimize disruption'
            },
            {
              title: 'Governance framework',
              description: 'Established clear ownership and processes for ongoing data quality'
            }
          ]
        },
        relatedCases: [3, 4]
      }
    },
    {
      id: 3,
      slug: 'healthcare-saas-gtm-strategy',
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
      timeline: '12 Weeks',
      fullContent: {
        situation: {
          text: [
            'This patient engagement platform had achieved early success with small practices but hit a wall trying to move upmarket. Deals with larger healthcare systems would enter the pipeline with enthusiasm but then stall for months in "decision-making" limbo.',
            'The sales team was frustrated. They had great product demos, positive feedback from clinical champions, but couldn\'t seem to get deals across the finish line. Marketing was generating leads, but conversion rates were declining quarter over quarter.'
          ],
          quote: {
            text: 'We\'d get so close—great demos, excited champions, verbal commitments—and then... nothing. Deals would just sit there. We started wondering if our product wasn\'t as good as we thought.',
            attribution: 'Founder & CEO'
          }
        },
        approach: {
          description: '3D Smile Solutions conducted a comprehensive GTM diagnostic to understand where and why deals were breaking down, then redesigned the entire sales motion.',
          phases: [
            {
              number: 1,
              title: 'Win/Loss Analysis & ICP Refinement',
              timeline: 'Weeks 1-4',
              items: [
                'Interviewed 20+ recent wins, losses, and stalled opportunities',
                'Analyzed buying committee composition and decision criteria',
                'Mapped the actual buying process vs. assumed buying process',
                'Identified patterns in successful vs. unsuccessful deals',
                'Redefined ICP based on revenue potential and buying readiness'
              ]
            },
            {
              number: 2,
              title: 'Sales Methodology Redesign',
              timeline: 'Weeks 5-9',
              items: [
                'Built new discovery framework focused on organizational readiness',
                'Created tools to identify and engage economic buyers early',
                'Designed qualification criteria tied to real buying signals',
                'Developed business case templates for different personas',
                'Restructured demo flow around buyer priorities, not features',
                'Created mutual action plans to drive accountability'
              ]
            },
            {
              number: 3,
              title: 'Enablement & Launch',
              timeline: 'Weeks 10-12',
              items: [
                'Trained sales team on new methodology and tools',
                'Aligned marketing messaging with refined ICP',
                'Updated sales collateral and demo environments',
                'Established new pipeline metrics and coaching framework',
                'Created playbooks for common objections and stall patterns'
              ]
            }
          ]
        },
        outcome: {
          description: 'Within 90 days of implementing the new GTM motion, the company saw dramatic improvements:',
          metrics: [
            { label: 'Sales Cycle', value: 'Decreased from 6 months to 3.5 months' },
            { label: 'Win Rate', value: 'Increased from 18% to 34%' },
            { label: 'Average Deal Size', value: 'Increased 2.3x by targeting right buyers' },
            { label: 'Pipeline Quality', value: 'Stalled deals reduced by 65%' }
          ],
          quotes: [
            {
              text: 'The biggest insight was realizing we were selling to the wrong people. We were getting clinical champions excited, but they couldn\'t buy. Now we\'re having different conversations with different stakeholders.',
              attribution: 'VP of Sales'
            },
            {
              text: 'The mutual action plan changed everything. Instead of hoping deals move forward, we now have clear milestones and accountability on both sides. If a deal is going to die, we know early.',
              attribution: 'Enterprise Account Executive'
            }
          ],
          successFactors: [
            {
              title: 'Evidence-based approach',
              description: 'Built the strategy on actual buyer behavior, not assumptions or best practices from other industries'
            },
            {
              title: 'Focus on buying, not selling',
              description: 'Redesigned the process around how healthcare organizations actually make purchasing decisions'
            },
            {
              title: 'Practical tools',
              description: 'Created immediately usable frameworks and templates, not just concepts'
            },
            {
              title: 'Sales-marketing alignment',
              description: 'Ensured both teams were targeting the same ICP with consistent messaging'
            }
          ]
        },
        relatedCases: [2, 4]
      }
    },
    {
      id: 4,
      slug: 'regional-dso-enterprise-revops',
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
      timeline: '20 Weeks',
      fullContent: {
        situation: {
          text: [
            'This rapidly growing DSO had acquired 50+ dental practices across three states in just two years. Each practice came with its own practice management software, patient communication tools, billing processes, and reporting methods. The result was an operational nightmare.',
            'The executive team had no standardized way to measure performance across locations. Financial reporting required manual data collection from each practice. Patient communication was inconsistent. The infrastructure that worked for 10 practices was buckling under the weight of 50.'
          ],
          quote: {
            text: 'Every practice was operating like its own island. We couldn\'t answer basic questions like "What\'s our average production per provider?" without spending weeks collecting data. We knew we needed enterprise systems, but the thought of disrupting 50 practices was terrifying.',
            attribution: 'Chief Operating Officer'
          }
        },
        approach: {
          description: '3D Smile Solutions designed and implemented a phased transformation to enterprise-grade revenue operations while minimizing disruption to patient care.',
          phases: [
            {
              number: 1,
              title: 'Assessment & Architecture Design',
              timeline: 'Weeks 1-4',
              items: [
                'Audited systems, processes, and data across all 50 locations',
                'Identified critical workflows that couldn\'t be disrupted',
                'Designed enterprise RevOps architecture for scalability',
                'Selected technology stack based on DSO-specific requirements',
                'Created phased rollout plan by region',
                'Established success metrics and KPIs'
              ]
            },
            {
              number: 2,
              title: 'Platform Build & Integration',
              timeline: 'Weeks 5-12',
              items: [
                'Standardized on enterprise practice management platform',
                'Built centralized patient communication system with HIPAA compliance',
                'Integrated billing and collections workflows',
                'Created real-time performance dashboards for each role',
                'Established automated reporting for executive team',
                'Built data warehouse for cross-location analytics',
                'Configured role-based access and security controls'
              ]
            },
            {
              number: 3,
              title: 'Regional Rollout & Change Management',
              timeline: 'Weeks 13-20',
              items: [
                'Rolled out new systems region by region (10-15 practices at a time)',
                'Provided on-site training and support at each location',
                'Migrated historical patient data with quality validation',
                'Created standardized operating procedures',
                'Established regional champions for ongoing support',
                'Conducted post-rollout optimization for each region',
                'Built governance framework for system maintenance'
              ]
            }
          ]
        },
        outcome: {
          description: 'The DSO now operates as a true enterprise with unified systems, processes, and visibility:',
          metrics: [
            { label: 'Reporting Time', value: 'From weeks to real-time dashboards' },
            { label: 'Patient No-Shows', value: 'Reduced 28% with standardized communication' },
            { label: 'Collections', value: 'Improved 15% with automated workflows' },
            { label: 'New Practice Integration', value: 'From 6 months to 6 weeks' }
          ],
          quotes: [
            {
              text: 'We can now make strategic decisions based on data across the entire organization. We see trends before they become problems. It\'s transformed how we operate.',
              attribution: 'Chief Operating Officer'
            },
            {
              text: 'I was skeptical about changing systems—we\'d been using the same software for 15 years. But the training was excellent, and now I can\'t imagine going back. Everything is faster and easier.',
              attribution: 'Practice Manager, Acquired Location'
            }
          ],
          successFactors: [
            {
              title: 'Regional rollout strategy',
              description: 'Phased implementation allowed lessons learned to improve each subsequent rollout'
            },
            {
              title: 'Change management focus',
              description: 'On-site support and training ensured staff felt supported, not abandoned'
            },
            {
              title: 'DSO-specific design',
              description: 'Architecture built for multi-location complexity from day one'
            },
            {
              title: 'Executive visibility',
              description: 'Real-time dashboards enabled data-driven decision making'
            }
          ]
        },
        relatedCases: [1, 5]
      }
    },
    {
      id: 5,
      slug: 'primary-care-compliance-automation',
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
      timeline: '12 Weeks',
      fullContent: {
        situation: {
          text: [
            'This family medicine practice was thriving from a patient care perspective—loyal patient base, excellent reviews, and a waiting list for new patients. But under the surface, there were significant compliance and operational issues.',
            'Staff were using personal cell phones to text patients about appointments and test results. Patient data was being accessed from unsecured home networks. There was no audit trail for who accessed which records. The practice administrator knew these were problems but didn\'t know where to start fixing them.'
          ],
          quote: {
            text: 'We\'re good doctors, but we\'re not IT people. I knew we probably weren\'t doing everything right from a compliance standpoint, but the thought of an audit kept me up at night. We needed help.',
            attribution: 'Managing Physician'
          }
        },
        approach: {
          description: '3D Smile Solutions conducted a HIPAA compliance assessment and implemented a comprehensive plan to address gaps while improving operational efficiency.',
          phases: [
            {
              number: 1,
              title: 'Compliance Assessment',
              timeline: 'Weeks 1-2',
              items: [
                'Conducted comprehensive HIPAA risk assessment',
                'Identified all PHI touchpoints and potential vulnerabilities',
                'Reviewed Business Associate Agreements',
                'Assessed employee training and awareness',
                'Documented required vs. actual security controls',
                'Prioritized remediation based on risk'
              ]
            },
            {
              number: 2,
              title: 'System Implementation',
              timeline: 'Weeks 3-8',
              items: [
                'Implemented BAA-compliant patient communication platform',
                'Configured secure remote access with multi-factor authentication',
                'Established automated audit logging for EHR access',
                'Set up encrypted email for sharing patient information',
                'Created automated appointment reminders and confirmations',
                'Built patient portal for secure messaging',
                'Implemented device management policies'
              ]
            },
            {
              number: 3,
              title: 'Training & Documentation',
              timeline: 'Weeks 9-12',
              items: [
                'Conducted HIPAA training for all staff',
                'Created security policies and procedures',
                'Developed incident response plan',
                'Established ongoing compliance monitoring',
                'Trained staff on new communication tools',
                'Created patient-facing materials about secure communication'
              ]
            }
          ]
        },
        outcome: {
          description: 'The practice achieved HIPAA compliance while simultaneously improving operational efficiency:',
          metrics: [
            { label: 'Compliance Score', value: 'From 62% to 98% in 12 weeks' },
            { label: 'Patient Response Rate', value: 'Increased 45% with automated reminders' },
            { label: 'Staff Time on Phones', value: 'Reduced by 8 hours per week' },
            { label: 'Audit Readiness', value: 'Complete documentation and controls' }
          ],
          quotes: [
            {
              text: 'I finally sleep well at night. We\'re not just compliant—we have a system that makes compliance automatic. And as a bonus, our patients love the automated reminders.',
              attribution: 'Managing Physician'
            },
            {
              text: 'Before, I spent so much time making reminder calls and playing phone tag. Now that\'s all automated, and I can focus on patients who need help scheduling or have questions.',
              attribution: 'Front Desk Coordinator'
            }
          ],
          successFactors: [
            {
              title: 'Risk-based prioritization',
              description: 'Focused on highest-risk issues first while building toward comprehensive compliance'
            },
            {
              title: 'Operational improvement',
              description: 'Compliance wasn\'t a burden—it came with efficiency gains that staff appreciated'
            },
            {
              title: 'Education focus',
              description: 'Staff understood why policies mattered, not just what they had to do'
            },
            {
              title: 'Sustainable systems',
              description: 'Built infrastructure that maintains compliance automatically, not through vigilance'
            }
          ]
        },
        relatedCases: [1, 4]
      }
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

  const handleCaseClick = (slug) => {
    navigate(`/case-studies/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    navigate('/case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const calendarSection = document.querySelector('.calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find active case by slug from URL params
  const activeCase = caseStudies.find(cs => cs.slug === caseId);

  // Scroll to top when URL changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseId]);

  return (
    <div className="case-studies-page">
      <Navbar />

      {!caseId ? (
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
                onClick={() => handleCaseClick(caseStudy.slug)}
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
          {activeCase && activeCase.fullContent ? (
            <>
              <section className="case-detail-hero">
                <div className="case-detail-hero-inner">

                  
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
                          onClick={() => handleCaseClick(relatedCase.slug)}
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
          ) : (
            <div className="case-not-found">
              <h2>Case Study Not Found</h2>
              <button className="cta-button" onClick={handleBackToHub}>
                Return to Case Studies
              </button>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudies;