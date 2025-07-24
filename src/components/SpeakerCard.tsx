import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-gradient-card rounded-lg p-6 shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-accent overflow-hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {speaker.name}
          </h3>
          <p className="text-primary font-medium mb-1">{speaker.title}</p>
          <p className="text-muted-foreground text-sm mb-3">{speaker.company}</p>
          <div className="flex flex-wrap gap-1 justify-center">
            {speaker.expertise.slice(0, 2).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {speaker.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-32 h-32 mx-auto sm:mx-0 rounded-full bg-gradient-accent overflow-hidden flex-shrink-0">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-primary mb-1">{speaker.title}</h3>
                <p className="text-muted-foreground mb-3">{speaker.company}</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {speaker.expertise.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Biography</h4>
              <p className="text-muted-foreground leading-relaxed">{speaker.bio}</p>
            </div>

            {(speaker.social.twitter || speaker.social.linkedin) && (
              <div className="flex gap-4 justify-center sm:justify-start">
                {speaker.social.twitter && (
                  <a
                    href={speaker.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-conference-blue transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a
                    href={speaker.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-conference-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SpeakerCard;