-- Clear existing jobs
DELETE FROM jobs;

-- Insert new job openings
INSERT INTO jobs (title, team, description, location, onsite_requirement, employment, seniority, tags, status) VALUES
('Senior Full-Stack Engineer (Supabase / React)', 'Technology & Innovation', 'Own the end-to-end development of products that merge AI, automation, and web technology. You''ll architect, build, and scale Supabase + React apps that power intelligent systems and client solutions.

What You''ll Do:
• Ship reliable, fast, and secure web experiences using React, Next.js, and Supabase
• Build and integrate APIs, serverless functions, and real-time features
• Collaborate closely with designers, strategists, and data engineers
• Optimize performance and scalability across deployments

What You Bring:
• 4+ years of hands-on web development experience
• Deep understanding of TypeScript, React, and relational data (Postgres/Supabase)
• Experience with Cloudflare Workers or similar edge runtimes
• A bias toward simplicity, speed, and autonomy', 'Remote — US', 'Remote-first', 'full_time', 'senior', ARRAY['React', 'TypeScript', 'Supabase', 'Next.js', 'API Development'], 'open'),

('Creative Director (Integrated)', 'Creative Studio', 'Lead integrated creative across brand, content, and campaigns. You''ll guide multidisciplinary teams to deliver world-class visuals and storytelling that drive measurable growth.

What You''ll Do:
• Oversee creative strategy from concept through execution
• Direct brand identity, campaigns, and digital experiences
• Collaborate with marketing, media, and tech teams to ensure cohesion
• Mentor designers, writers, and producers

What You Bring:
• Proven experience leading creative across digital and brand platforms
• Strong understanding of integrated campaigns and content systems
• Confident communicator with an eye for both craft and clarity', 'Houston, TX or Remote — US', 'Hybrid', 'full_time', 'senior', ARRAY['Brand Strategy', 'Creative Direction', 'Campaign Management', 'Team Leadership'], 'open'),

('AI Solutions Architect', 'Technology & Innovation', 'Design and deploy practical AI systems using LLMs, RAG pipelines, and workflow automation. You''ll translate complex needs into scalable, production-ready solutions.

What You''ll Do:
• Architect and implement AI features for client and internal platforms
• Integrate APIs, fine-tune LLMs, and design efficient retrieval systems
• Collaborate with engineers and product leads to define best practices
• Evaluate tools and frameworks to push AI capabilities forward

What You Bring:
• Experience deploying LLMs or building AI-driven apps
• Proficiency with Python/TypeScript, APIs, and vector databases
• Systems thinking and a practical approach to innovation', 'Remote — US', 'Remote-first', 'full_time', 'senior', ARRAY['AI/ML', 'LLMs', 'Python', 'TypeScript', 'RAG', 'APIs'], 'open'),

('Digital Strategist', 'Technology & Innovation', 'Shape digital transformation strategies that connect product, data, and marketing. You''ll help clients and internal teams align roadmaps to measurable outcomes.

What You''ll Do:
• Audit current digital ecosystems and define transformation plans
• Translate business goals into clear technology roadmaps
• Collaborate with tech, creative, and operations leads to execute
• Drive governance, performance tracking, and scalability standards

What You Bring:
• 5+ years in digital strategy, product, or transformation consulting
• Experience aligning data, automation, and user experience
• Clarity in both strategic thinking and written communication', 'Remote — US', 'Remote-first', 'full_time', 'mid', ARRAY['Digital Strategy', 'Product Management', 'Transformation', 'Data Analytics'], 'open'),

('Project Manager (Agile / Client Services)', 'Operations', 'Keep projects aligned, on schedule, and client-ready. You''ll manage timelines and cross-functional collaboration to ensure smooth delivery across multiple initiatives.

What You''ll Do:
• Plan, track, and deliver multi-disciplinary projects
• Facilitate stand-ups, retros, and communication across teams
• Translate client goals into internal action items and timelines
• Identify and resolve risks early

What You Bring:
• 3+ years in digital or creative project management
• Familiar with Agile, Notion/Jira, and cross-team communication
• Calm under pressure and sharp on follow-through', 'Remote — US', 'Remote-first', 'full_time', 'mid', ARRAY['Agile', 'Project Management', 'Client Services', 'Jira', 'Notion'], 'open'),

('Performance Marketing Lead', 'Marketing & Growth', 'Own digital ad strategy and execution across Google, Meta, and emerging platforms. You''ll combine creative testing with data-driven optimization to drive real ROI.

What You''ll Do:
• Plan and manage paid media campaigns across platforms
• Collaborate with creative and analytics teams on testing and reporting
• Optimize campaigns for ROAS and conversion efficiency
• Stay ahead of trends in targeting, bidding, and attribution

What You Bring:
• 4+ years running paid campaigns with measurable outcomes
• Deep familiarity with Google Ads, Meta Ads, and analytics tools
• A sharp mix of creative instincts and data fluency', 'Remote — US', 'Remote-first', 'full_time', 'senior', ARRAY['Google Ads', 'Meta Ads', 'Performance Marketing', 'Analytics', 'ROAS'], 'open'),

('Senior Video Producer (Ads & Brand)', 'Creative Studio', 'Lead video production from concept to delivery for branded content and performance ads. You''ll work with cross-functional teams to craft stories that resonate and convert.

What You''ll Do:
• Produce and direct shoots for brand and campaign content
• Manage editing, color, sound, and motion workflows
• Collaborate with strategy and design to ensure alignment
• Balance creativity with business goals in every deliverable

What You Bring:
• 5+ years producing commercial or brand video content
• Strong visual instincts and post-production understanding
• A hands-on approach and collaborative mindset', 'Houston, TX or SLC, UT — Hybrid/Remote', 'Hybrid', 'full_time', 'senior', ARRAY['Video Production', 'Post-Production', 'Brand Content', 'Commercial Production'], 'open');