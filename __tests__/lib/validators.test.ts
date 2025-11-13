import { describe, it, expect } from 'vitest'
import { leadSchema } from '@/lib/validators'

describe('Lead Schema Validation', () => {
  it('should validate a correct lead', () => {
    const validLead = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Inc',
      phone: '+44 20 1234 5678',
      message: 'I am interested in your services',
      interest: 'cybersecurity' as const,
    }

    const result = leadSchema.safeParse(validLead)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('John Doe')
      expect(result.data.email).toBe('john@example.com')
    }
  })

  it('should reject invalid email', () => {
    const invalidLead = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'Test message',
    }

    const result = leadSchema.safeParse(invalidLead)
    expect(result.success).toBe(false)
  })

  it('should reject short name', () => {
    const invalidLead = {
      name: 'J',
      email: 'john@example.com',
      message: 'Test message',
    }

    const result = leadSchema.safeParse(invalidLead)
    expect(result.success).toBe(false)
  })

  it('should reject short message', () => {
    const invalidLead = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    }

    const result = leadSchema.safeParse(invalidLead)
    expect(result.success).toBe(false)
  })

  it('should accept optional fields', () => {
    const minimalLead = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message',
    }

    const result = leadSchema.safeParse(minimalLead)
    expect(result.success).toBe(true)
  })

  it('should validate interest enum', () => {
    const validInterests = ['cybersecurity', 'devsecops', 'ai', 'data'] as const

    validInterests.forEach((interest) => {
      const lead = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
        interest,
      }

      const result = leadSchema.safeParse(lead)
      expect(result.success).toBe(true)
    })

    const invalidLead = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
      interest: 'invalid',
    }

    const result = leadSchema.safeParse(invalidLead)
    expect(result.success).toBe(false)
  })
})

