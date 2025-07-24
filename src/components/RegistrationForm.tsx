import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  position: z.string().min(2, "Position is required"),
  ticketType: z.string().min(1, "Please select a ticket type"),
  dietary: z.string().optional(),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

type RegistrationData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registration data:", data);
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            className="mt-1"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            className="mt-1"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            {...register("company")}
            className="mt-1"
            placeholder="Enter your company"
          />
          {errors.company && (
            <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="position">Position *</Label>
          <Input
            id="position"
            {...register("position")}
            className="mt-1"
            placeholder="Enter your position"
          />
          {errors.position && (
            <p className="text-destructive text-sm mt-1">{errors.position.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="ticketType">Ticket Type *</Label>
        <Select onValueChange={(value) => setValue("ticketType", value)}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a ticket type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="early-bird">Early Bird - $299</SelectItem>
            <SelectItem value="regular">Regular - $399</SelectItem>
            <SelectItem value="premium">Premium - $599</SelectItem>
            <SelectItem value="student">Student - $99</SelectItem>
          </SelectContent>
        </Select>
        {errors.ticketType && (
          <p className="text-destructive text-sm mt-1">{errors.ticketType.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="dietary">Dietary Requirements</Label>
        <Textarea
          id="dietary"
          {...register("dietary")}
          className="mt-1"
          placeholder="Please specify any dietary requirements or allergies"
          rows={3}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            onCheckedChange={(checked) => setValue("newsletter", !!checked)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to our newsletter for updates and announcements
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            onCheckedChange={(checked) => setValue("terms", !!checked)}
          />
          <Label htmlFor="terms" className="text-sm">
            I accept the{" "}
            <a href="#" className="text-primary hover:underline">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              privacy policy
            </a>
            *
          </Label>
        </div>
        {errors.terms && (
          <p className="text-destructive text-sm">{errors.terms.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Complete Registration"}
      </Button>
    </form>
  );
};

export default RegistrationForm;