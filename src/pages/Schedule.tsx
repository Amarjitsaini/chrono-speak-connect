import { Badge } from "@/components/ui/badge";

const scheduleData = [
  {
    day: "Day 1 - September 15, 2024",
    sessions: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        type: "networking",
        speaker: "",
        description: "Check-in, networking, and breakfast"
      },
      {
        time: "09:00 - 09:45",
        title: "Opening Keynote: The Future of AI",
        type: "keynote",
        speaker: "Sarah Chen",
        description: "An inspiring look at how artificial intelligence will transform our world in the next decade."
      },
      {
        time: "10:00 - 10:45",
        title: "Building Scalable Cloud Architectures",
        type: "technical",
        speaker: "Marcus Rodriguez",
        description: "Best practices for designing systems that can handle massive scale and traffic."
      },
      {
        time: "10:45 - 11:15",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Networking and refreshments"
      },
      {
        time: "11:15 - 12:00",
        title: "Quantum Computing: From Theory to Practice",
        type: "technical",
        speaker: "Dr. Emily Watson",
        description: "Understanding quantum computing and its practical applications in today's world."
      },
      {
        time: "12:00 - 13:30",
        title: "Lunch & Networking",
        type: "networking",
        speaker: "",
        description: "Enjoy lunch while connecting with fellow attendees"
      },
      {
        time: "13:30 - 14:15",
        title: "Product Innovation in the Digital Age",
        type: "business",
        speaker: "James Liu",
        description: "How to build products that users love in an increasingly competitive market."
      },
      {
        time: "14:30 - 15:15",
        title: "Cybersecurity in 2024: Threats & Solutions",
        type: "security",
        speaker: "Priya Sharma",
        description: "Latest cybersecurity threats and how organizations can protect themselves."
      },
      {
        time: "15:15 - 15:45",
        title: "Afternoon Break",
        type: "break",
        speaker: "",
        description: "Refreshments and networking"
      },
      {
        time: "15:45 - 16:30",
        title: "The Blockchain Revolution",
        type: "technical",
        speaker: "Alex Thompson",
        description: "How blockchain technology is transforming industries beyond cryptocurrency."
      },
      {
        time: "17:00 - 19:00",
        title: "Welcome Reception",
        type: "networking",
        speaker: "",
        description: "Join us for drinks, networking, and live music"
      }
    ]
  },
  {
    day: "Day 2 - September 16, 2024",
    sessions: [
      {
        time: "08:30 - 09:00",
        title: "Morning Coffee",
        type: "networking",
        speaker: "",
        description: "Start your day with coffee and networking"
      },
      {
        time: "09:00 - 10:30",
        title: "Workshop: Building AI Applications",
        type: "workshop",
        speaker: "Sarah Chen",
        description: "Hands-on workshop on developing practical AI applications using modern frameworks."
      },
      {
        time: "10:45 - 12:15",
        title: "Workshop: Cloud Native Development",
        type: "workshop",
        speaker: "Marcus Rodriguez",
        description: "Learn to build and deploy cloud-native applications with containers and microservices."
      },
      {
        time: "12:15 - 13:45",
        title: "Lunch Break",
        type: "networking",
        speaker: "",
        description: "Lunch and networking session"
      },
      {
        time: "13:45 - 15:15",
        title: "Panel: The Future of Work",
        type: "panel",
        speaker: "Multiple Speakers",
        description: "Industry leaders discuss how technology is reshaping the workplace."
      },
      {
        time: "15:30 - 16:15",
        title: "Startup Showcase",
        type: "showcase",
        speaker: "Various Startups",
        description: "Innovative startups present their groundbreaking solutions."
      },
      {
        time: "16:30 - 17:15",
        title: "Closing Keynote: Tech for Good",
        type: "keynote",
        speaker: "Dr. Emily Watson",
        description: "How technology can be used to solve global challenges and create positive impact."
      },
      {
        time: "17:30 - 20:00",
        title: "Conference Dinner",
        type: "networking",
        speaker: "",
        description: "Celebrate the conference with dinner, awards, and entertainment"
      }
    ]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "bg-conference-purple text-white";
    case "technical":
      return "bg-conference-blue text-white";
    case "workshop":
      return "bg-conference-pink text-white";
    case "business":
      return "bg-conference-orange text-white";
    case "security":
      return "bg-destructive text-destructive-foreground";
    case "panel":
      return "bg-primary text-primary-foreground";
    case "networking":
      return "bg-muted text-muted-foreground";
    case "break":
      return "bg-secondary text-secondary-foreground";
    case "showcase":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Schedule = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Conference Schedule
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days packed with inspiring talks, hands-on workshops, and networking opportunities. 
            Plan your perfect conference experience.
          </p>
        </div>

        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-gradient-card rounded-lg p-6 shadow-card border border-border/50">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
                {day.day}
              </h2>
              
              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full text-center">
                        {session.time}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground flex-1">
                          {session.title}
                        </h3>
                        <Badge className={getTypeColor(session.type)}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </Badge>
                      </div>
                      
                      {session.speaker && (
                        <p className="text-primary font-medium mb-1">
                          Speaker: {session.speaker}
                        </p>
                      )}
                      
                      <p className="text-muted-foreground text-sm">
                        {session.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              This comprehensive schedule offers something for everyone, from technical deep-dives to business insights. 
              Register now to secure your spot at all sessions.
            </p>
            <a
              href="/register"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;