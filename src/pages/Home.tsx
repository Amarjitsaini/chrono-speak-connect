import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/conference-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            TechConf 2024
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the world's leading tech innovators for three days of cutting-edge insights, 
            networking, and the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/speakers">View Speakers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Event Starts In
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't miss out on the most anticipated tech event of the year
            </p>
          </div>
          <CountdownTimer targetDate="2024-09-15T09:00:00" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Attend TechConf 2024?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of technology through expert talks, hands-on workshops, and unparalleled networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card border border-border/50">
              <div className="w-16 h-16 bg-conference-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Speakers</h3>
              <p className="text-muted-foreground">
                Learn from industry leaders and pioneers who are shaping the future of technology.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card border border-border/50">
              <div className="w-16 h-16 bg-conference-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Networking</h3>
              <p className="text-muted-foreground">
                Connect with like-minded professionals, potential collaborators, and industry experts.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-lg shadow-card border border-border/50">
              <div className="w-16 h-16 bg-conference-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Discover breakthrough technologies, cutting-edge solutions, and emerging trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Secure your spot at the most anticipated tech conference of 2024. 
              Early bird pricing ends soon!
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
              <Link to="/register">Get Your Ticket</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;