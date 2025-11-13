"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CaseCardProps {
  title: string
  description: string
  category: string
  href?: string
  delay?: number
}

export function CaseCard({
  title,
  description,
  category,
  href = "/case-studies",
  delay = 0,
}: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
            {category}
          </span>
          <CardTitle className="mt-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline" size="sm">
            <Link href={href}>View Case Study</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

