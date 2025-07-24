import SpeakerCard from "@/components/SpeakerCard";

const speakers = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    company: "InnovateTech",
    bio: "Sarah is a visionary technology leader with over 15 years of experience in artificial intelligence and machine learning. She has led groundbreaking projects at major tech companies and is a recognized expert in AI ethics and responsible innovation. Sarah holds a PhD in Computer Science from MIT and has published numerous research papers on machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b25c1387?w=400&h=400&fit=crop&crop=face",
    expertise: ["AI", "Machine Learning", "Ethics", "Leadership"],
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen"
    }
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Senior Staff Engineer",
    company: "CloudScale",
    bio: "Marcus is a distributed systems expert who has architected some of the world's largest cloud infrastructures. With a background in both software engineering and systems design, he specializes in building scalable, reliable systems that can handle millions of users. He's a frequent speaker at tech conferences and contributes to several open-source projects.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Cloud Architecture", "Distributed Systems", "DevOps", "Scalability"],
    social: {
      twitter: "https://twitter.com/marcusrod",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    }
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    title: "Research Director",
    company: "Quantum Dynamics",
    bio: "Dr. Watson is at the forefront of quantum computing research, leading breakthrough projects that are pushing the boundaries of what's possible in computation. She has a PhD in Quantum Physics from Stanford and has worked with leading tech companies to develop practical quantum computing applications. Her work focuses on quantum algorithms and their real-world applications.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    expertise: ["Quantum Computing", "Physics", "Algorithms", "Research"],
    social: {
      linkedin: "https://linkedin.com/in/emilywatson"
    }
  },
  {
    id: "4",
    name: "James Liu",
    title: "Head of Product",
    company: "NextGen Apps",
    bio: "James is a product visionary who has launched multiple successful consumer applications used by millions worldwide. He combines technical expertise with user experience design to create products that truly resonate with users. Before joining NextGen Apps, he held senior product roles at major tech companies and has been instrumental in bringing innovative features to market.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    expertise: ["Product Management", "UX Design", "Mobile Apps", "Strategy"],
    social: {
      twitter: "https://twitter.com/jamesliu",
      linkedin: "https://linkedin.com/in/jamesliu"
    }
  },
  {
    id: "5",
    name: "Priya Sharma",
    title: "Cybersecurity Expert",
    company: "SecureNet Solutions",
    bio: "Priya is a renowned cybersecurity specialist with extensive experience in protecting critical infrastructure and enterprise systems. She has led security initiatives for Fortune 500 companies and government agencies, focusing on threat detection, incident response, and security architecture. She holds multiple security certifications and is a sought-after expert on emerging security threats.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    expertise: ["Cybersecurity", "Threat Detection", "Risk Management", "Compliance"],
    social: {
      linkedin: "https://linkedin.com/in/priyasharma"
    }
  },
  {
    id: "6",
    name: "Alex Thompson",
    title: "Blockchain Architect",
    company: "DecentralTech",
    bio: "Alex is a pioneer in blockchain technology and decentralized applications. He has been working in the blockchain space since its early days and has architected several major DeFi protocols and NFT platforms. His expertise spans smart contract development, tokenomics, and blockchain scalability solutions. He's also an active contributor to blockchain open-source projects.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
    social: {
      twitter: "https://twitter.com/alexthompson",
      linkedin: "https://linkedin.com/in/alexthompson"
    }
  }
];

const Speakers = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Meet Our Speakers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders, innovators, and experts who are shaping the future of technology. 
            Our speakers bring decades of experience and cutting-edge insights to share with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to be notified when we announce more speakers?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;