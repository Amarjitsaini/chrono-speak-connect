import RegistrationForm from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Register for TechConf 2024
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for two days of cutting-edge insights, networking, and innovation. 
              Secure your spot today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ticket Types */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-card rounded-lg p-6 shadow-card border border-border/50 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Ticket Options
                </h2>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-conference-purple/20 bg-conference-purple/5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-conference-purple">Early Bird</h3>
                      <span className="text-2xl font-bold text-conference-purple">$299</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Limited time offer - save $100!
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>✓ All conference sessions</li>
                      <li>✓ Networking events</li>
                      <li>✓ Welcome reception</li>
                      <li>✓ Conference materials</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Regular</h3>
                      <span className="text-2xl font-bold">$399</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Standard conference access
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>✓ All conference sessions</li>
                      <li>✓ Networking events</li>
                      <li>✓ Welcome reception</li>
                      <li>✓ Conference materials</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-conference-orange/20 bg-conference-orange/5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-conference-orange">Premium</h3>
                      <span className="text-2xl font-bold text-conference-orange">$599</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      VIP experience with extras
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>✓ Everything in Regular</li>
                      <li>✓ VIP seating</li>
                      <li>✓ Exclusive speaker meet & greets</li>
                      <li>✓ Premium swag bag</li>
                      <li>✓ Private networking dinner</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-conference-blue/20 bg-conference-blue/5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-conference-blue">Student</h3>
                      <span className="text-2xl font-bold text-conference-blue">$99</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Special pricing for students
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>✓ All conference sessions</li>
                      <li>✓ Networking events</li>
                      <li>✓ Welcome reception</li>
                      <li>✓ Conference materials</li>
                      <li className="text-xs text-muted-foreground">* Student ID required</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-foreground">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 2 days of expert sessions</li>
                    <li>• Hands-on workshops</li>
                    <li>• All meals and refreshments</li>
                    <li>• Conference app access</li>
                    <li>• Digital resource library</li>
                    <li>• Certificate of attendance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-card rounded-lg p-8 shadow-card border border-border/50">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Registration Details
                </h2>
                <RegistrationForm />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-card rounded-lg p-6 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Event Details
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>September 15-16, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tech Convention Center, San Francisco</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>9:00 AM - 6:00 PM both days</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-lg p-6 shadow-card border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Need Help?
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>support@techconf2024.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Check our FAQ section</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;