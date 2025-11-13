import { describe, it, expect, beforeEach, vi } from 'vitest'
import { POST } from '@/app/api/leads/route'
import { leadSchema } from '@/lib/validators'

// Mock NextResponse
vi.mock('next/server', () => ({
  NextResponse: {
    json: (data: any, init?: { status?: number }) => ({
      json: async () => data,
      status: init?.status || 200,
    }),
  },
}))

describe('Leads API Route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should accept valid lead data', async () => {
    const validLead = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Inc',
      phone: '+44 20 1234 5678',
      message: 'I am interested in your services',
      interest: 'cybersecurity',
    }

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify(validLead),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    const data = await response.json()

    expect(data.success).toBe(true)
    expect(data.message).toBe('Lead received')
  })

  it('should reject invalid lead data', async () => {
    const invalidLead = {
      name: 'J', // Too short
      email: 'invalid-email',
      message: 'Short', // Too short
    }

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify(invalidLead),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    const data = await response.json()

    expect(data.success).toBe(false)
    expect(response.status).toBe(400)
  })

  it('should handle honeypot field', async () => {
    const leadWithHoneypot = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message',
      honeypot: 'spam-bot',
    }

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify(leadWithHoneypot),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    const data = await response.json()

    // Should return success to avoid revealing honeypot
    expect(data.success).toBe(true)
  })

  it('should handle missing required fields', async () => {
    const incompleteLead = {
      name: 'John Doe',
      // Missing email and message
    }

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify(incompleteLead),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    const data = await response.json()

    expect(data.success).toBe(false)
    expect(response.status).toBe(400)
  })

  it('should handle malformed JSON', async () => {
    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: 'invalid json',
      headers: { 'Content-Type': 'application/json' },
    })

    // Invalid JSON should return 400 Bad Request
    const response = await POST(request)
    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.success).toBe(false)
    expect(data.message).toBe('Invalid JSON')
  })
})

