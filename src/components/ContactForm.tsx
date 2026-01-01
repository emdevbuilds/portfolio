"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const ContactForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      SenderEmail: formData.get("SenderEmail") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline">Get in Touch</CardTitle>
          <CardDescription>
            Feel free to reach out with any inquiries, collaborations, or
            opportunities. Simply fill out the form below, and I&apos;ll get
            back to you as soon as possible. Your message is important to me.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="SenderEmail">Email</Label>
            <Input
              type="email"
              id="SenderEmail"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
