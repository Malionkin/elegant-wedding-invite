import React, { useState } from "react";
import { blink } from "@/lib/blink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Heart } from "lucide-react";

export const RSVPForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "1",
    guests: "1",
    dietary: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use the correct SDK pattern: blink.db.tableName.create
      await (blink.db as any).rsvps.create({
        name: formData.name,
        email: formData.email,
        attending: parseInt(formData.attending),
        guests: parseInt(formData.guests),
        dietaryRequirements: formData.dietary,
        userId: "guest", // Placeholder as RLS is handled or disabled
      });

      setSubmitted(true);
      toast.success("Thank you for your RSVP!");
    } catch (error: any) {
      console.error("RSVP Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-background p-12 shadow-elegant text-center animate-fade-in border border-primary/10">
        <Heart className="text-primary mx-auto mb-6" size={48} strokeWidth={1} />
        <h3 className="text-3xl font-serif mb-4">Thank You!</h3>
        <p className="text-muted-foreground">
          We have received your RSVP. We can't wait to see you there!
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-primary/20 hover:border-primary hover:text-primary transition-all"
          onClick={() => setSubmitted(false)}
        >
          RSVP for another guest
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background p-8 md:p-12 shadow-elegant animate-slide-up border border-primary/10">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold opacity-70">Full Name</Label>
          <Input
            id="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-primary/20 focus:border-primary rounded-none h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold opacity-70">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-primary/20 focus:border-primary rounded-none h-12"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-xs uppercase tracking-widest font-semibold opacity-70">Will you be attending?</Label>
          <RadioGroup
            defaultValue="1"
            onValueChange={(val) => setFormData({ ...formData, attending: val })}
            className="flex flex-col space-y-3 pt-2"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="1" id="yes" className="border-primary text-primary" />
              <Label htmlFor="yes" className="font-serif text-lg">Yes, I'll be there!</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="0" id="no" className="border-primary text-primary" />
              <Label htmlFor="no" className="font-serif text-lg italic opacity-70">Sadly, I can't make it</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.attending === "1" && (
          <div className="space-y-6 animate-fade-in pt-4">
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-xs uppercase tracking-widest font-semibold opacity-70">Number of Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="border-primary/20 focus:border-primary rounded-none h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary" className="text-xs uppercase tracking-widest font-semibold opacity-70">Dietary Requirements</Label>
              <Textarea
                id="dietary"
                placeholder="Vegetarian, allergies, etc."
                value={formData.dietary}
                onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                className="border-primary/20 focus:border-primary rounded-none min-h-[100px] resize-none"
              />
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white h-14 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:scale-[1.01] shadow-elegant rounded-none"
        >
          {loading ? "Sending Invitation..." : "Submit RSVP"}
        </Button>
      </form>
    </div>
  );
};
