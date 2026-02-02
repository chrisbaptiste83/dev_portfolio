# Portfolio Seed Data
# Run with: bin/rails db:seed

puts "Seeding database..."

# Clear existing data
ContactMessage.destroy_all
Testimonial.destroy_all
Project.destroy_all
Experience.destroy_all
Skill.destroy_all

# Skills
skills_data = [
  { name: "HTML 5", color: "#E34F26", category: "Frontend", position: 1 },
  { name: "CSS 3", color: "#1572B6", category: "Frontend", position: 2 },
  { name: "JavaScript", color: "#F7DF1E", category: "Frontend", position: 3 },
  { name: "TypeScript", color: "#3178C6", category: "Frontend", position: 4 },
  { name: "React", color: "#61DAFB", category: "Frontend", position: 5 },
  { name: "Ruby on Rails", color: "#CC0000", category: "Backend", position: 6 },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Frontend", position: 7 },
  { name: "Node.js", color: "#339933", category: "Backend", position: 8 },
  { name: "Three.js", color: "#000000", category: "Frontend", position: 9 },
  { name: "Git", color: "#F05032", category: "Tools", position: 10 },
  { name: "PostgreSQL", color: "#4169E1", category: "Database", position: 11 },
  { name: "Docker", color: "#2496ED", category: "Tools", position: 12 },
]

skills_data.each do |skill|
  Skill.create!(skill)
end
puts "Created #{Skill.count} skills"

# Experiences
experiences_data = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc",
    description: "Leading development of enterprise web applications",
    start_date: Date.new(2023, 1, 1),
    end_date: nil,
    icon: "🏢",
    icon_bg: "#383E56",
    position: 1,
    points: [
      "Lead a team of 5 developers in building scalable web applications using React and Ruby on Rails",
      "Architected and implemented microservices infrastructure reducing response times by 40%",
      "Mentored junior developers and established coding standards and best practices",
      "Collaborated with product managers to translate business requirements into technical solutions"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co",
    description: "Building modern web applications",
    start_date: Date.new(2021, 6, 1),
    end_date: Date.new(2022, 12, 31),
    icon: "🚀",
    icon_bg: "#E6DEDD",
    position: 2,
    points: [
      "Developed and maintained 10+ client projects using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Built RESTful APIs serving 50,000+ daily requests with 99.9% uptime",
      "Introduced automated testing increasing code coverage from 45% to 85%"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "Creative Agency",
    description: "Frontend development and UI/UX implementation",
    start_date: Date.new(2020, 1, 1),
    end_date: Date.new(2021, 5, 31),
    icon: "💼",
    icon_bg: "#383E56",
    position: 3,
    points: [
      "Built responsive websites for 20+ clients using modern HTML, CSS, and JavaScript",
      "Collaborated with designers to implement pixel-perfect UI designs",
      "Optimized website performance achieving 90+ Lighthouse scores",
      "Learned agile methodologies and participated in daily standups and sprint planning"
    ]
  }
]

experiences_data.each do |exp|
  Experience.create!(exp)
end
puts "Created #{Experience.count} experiences"

# Projects
projects_data = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing with Stripe, and an admin dashboard. Built with React, Ruby on Rails, and PostgreSQL.",
    tags: ["react", "rails", "stripe", "postgresql"],
    github_url: "https://github.com/example/ecommerce",
    live_url: "https://example-ecommerce.com",
    featured: true
  },
  {
    title: "Project Management Tool",
    description: "A collaborative project management application with real-time updates, Kanban boards, time tracking, and team collaboration features. Uses WebSockets for live synchronization.",
    tags: ["react", "node.js", "mongodb", "websockets"],
    github_url: "https://github.com/example/project-manager",
    live_url: "https://example-pm.com",
    featured: true
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI's GPT API with custom fine-tuning.",
    tags: ["nextjs", "openai", "tailwind", "typescript"],
    github_url: "https://github.com/example/ai-content",
    live_url: "https://example-ai.com",
    featured: true
  },
  {
    title: "Real Estate Listings",
    description: "A modern real estate platform with advanced search filters, virtual tours, mortgage calculator, and agent contact system. Features map integration with Mapbox.",
    tags: ["react", "rails", "mapbox", "elasticsearch"],
    github_url: "https://github.com/example/realestate",
    live_url: "https://example-realty.com",
    featured: false
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness application with workout planning, progress tracking, nutrition logging, and social features for sharing achievements with friends.",
    tags: ["react-native", "firebase", "redux", "charts"],
    github_url: "https://github.com/example/fitness",
    live_url: "https://example-fitness.com",
    featured: false
  },
  {
    title: "Video Streaming Platform",
    description: "A YouTube-like video streaming platform with video upload, transcoding, live streaming capabilities, and a recommendation engine based on user preferences.",
    tags: ["nextjs", "aws", "ffmpeg", "redis"],
    github_url: "https://github.com/example/streaming",
    live_url: "https://example-stream.com",
    featured: false
  }
]

projects_data.each do |project|
  Project.create!(project)
end
puts "Created #{Project.count} projects"

# Testimonials
testimonials_data = [
  {
    name: "Sarah Johnson",
    designation: "CEO",
    company: "TechStart Inc",
    quote: "Christopher delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The site handles thousands of daily transactions flawlessly."
  },
  {
    name: "Michael Chen",
    designation: "CTO",
    company: "InnovateTech",
    quote: "Working with Christopher was a game-changer for our team. He not only built a robust application but also mentored our junior developers. His code quality and documentation are top-notch."
  },
  {
    name: "Emily Rodriguez",
    designation: "Product Manager",
    company: "Digital Ventures",
    quote: "Christopher has a rare ability to translate complex business requirements into elegant technical solutions. He's proactive, communicative, and always delivers on time. I highly recommend him for any web development project."
  },
  {
    name: "David Kim",
    designation: "Founder",
    company: "AppWorks Studio",
    quote: "After Christopher optimized our application, we saw a 50% improvement in load times and user engagement increased significantly. His expertise in performance optimization is unmatched."
  }
]

testimonials_data.each do |testimonial|
  Testimonial.create!(testimonial)
end
puts "Created #{Testimonial.count} testimonials"

puts "Seeding complete!"
puts "Admin panel: http://localhost:3000/admin"
puts "Default credentials: admin / password123"
