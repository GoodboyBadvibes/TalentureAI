'use client'

import { DashboardHeader } from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome to AI Tools Hub</h1>
            <p className="text-lg text-muted-foreground">
              Access powerful AI tools to enhance your productivity
            </p>
          </div>

          {/* AI Tools Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* CV Assessment Report Writer Card */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    📄
                  </span>
                  CV Assessment Report Writer
                </CardTitle>
                <CardDescription>
                  Generate professional CV assessment reports
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-6">
                  Analyze and generate comprehensive CV assessment reports with detailed feedback on structure, content, and improvement suggestions.
                </p>
                <a href="https://cv-assessment-app.replit.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">Open Tool</Button>
                </a>
              </CardContent>
            </Card>

            {/* Voice AI Card */}
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    🎤
                  </span>
                  Eleven AI Lab
                </CardTitle>
                <CardDescription>
                  Interactive AI voice conversations
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-6">
                  Have natural conversations with advanced AI powered by ElevenLabs' conversational AI technology with realistic voice interactions.
                </p>
                <Link href="/tools/voice-ai">
                  <Button className="w-full">Open Tool</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1</span>
                  <span>Select a tool from above to begin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2</span>
                  <span>Each tool offers unique features to enhance your content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3</span>
                  <span>Save and export your work for use anywhere</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 AI Tools Hub. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
