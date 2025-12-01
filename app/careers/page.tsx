"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FadeIn } from "@/components/FadeIn"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const careerSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Enter valid email"),
  position: z.string().min(2, "Position required"),
  message: z.string().min(10, "Please give a short message"),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  cv: z.any().optional(),
})

type CareerForm = z.infer<typeof careerSchema>

export default function CareersPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const [fileData, setFileData] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerForm>({
    resolver: zodResolver(careerSchema),
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { 
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        })
        e.target.value = "" 
        setFileData(null)
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setFileData(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setFileData(null)
    }
  }

  const onSubmit = async (data: CareerForm) => {
    setIsSubmitting(true)
    
    // EmailJS Service ID, Template ID, and Public Key
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id"
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id"
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"

    try {
     
      const templateParams = {
        name: data.name,
        email: data.email,
        position: data.position,
        message: data.message,
        linkedin: data.linkedin,
        cv: fileData, 
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest! We will review your application and get back to you.",
      })
      reset()
      setFileData(null)
      
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error sending your application. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-20">
      <div className="container max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              We&apos;re always looking for talented individuals to help us secure the future.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8">
          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>
                  Send us your details and we&apos;ll contact you if your profile matches our needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="John Doe"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Input
                      id="position"
                      {...register("position")}
                      placeholder="e.g. Security Analyst"
                      aria-invalid={errors.position ? "true" : "false"}
                    />
                    {errors.position && (
                      <p className="text-sm text-destructive">{errors.position.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedin"
                      {...register("linkedin")}
                      placeholder="https://linkedin.com/in/..."
                    />
                    {errors.linkedin && (
                      <p className="text-sm text-destructive">{errors.linkedin.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Cover Letter / Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us why you'd be a great fit..."
                      rows={5}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cv">Upload CV (PDF/Word, max 5MB)</Label>
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Upload your resume so we can review your experience.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
