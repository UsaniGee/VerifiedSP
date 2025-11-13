import { describe, it, expect } from 'vitest'
import { services, interestOptions, brandColors } from '@/lib/constants'

describe('Constants', () => {
  describe('Services', () => {
    it('should have 4 services', () => {
      expect(services).toHaveLength(4)
    })

    it('should have required service properties', () => {
      services.forEach((service) => {
        expect(service).toHaveProperty('id')
        expect(service).toHaveProperty('title')
        expect(service).toHaveProperty('description')
        expect(service).toHaveProperty('icon')
        expect(typeof service.id).toBe('string')
        expect(typeof service.title).toBe('string')
        expect(typeof service.description).toBe('string')
      })
    })

    it('should have valid service IDs', () => {
      const validIds = ['cybersecurity', 'devsecops', 'ai', 'data']
      services.forEach((service) => {
        expect(validIds).toContain(service.id)
      })
    })
  })

  describe('Interest Options', () => {
    it('should have 4 interest options', () => {
      expect(interestOptions).toHaveLength(4)
    })

    it('should have value and label for each option', () => {
      interestOptions.forEach((option) => {
        expect(option).toHaveProperty('value')
        expect(option).toHaveProperty('label')
        expect(typeof option.value).toBe('string')
        expect(typeof option.label).toBe('string')
      })
    })
  })

  describe('Brand Colors', () => {
    it('should have primary color', () => {
      expect(brandColors.primary).toBe('#0a0f28')
    })

    it('should have secondary color', () => {
      expect(brandColors.secondary).toBe('#1abc9c')
    })

    it('should have neutral color', () => {
      expect(brandColors.neutral).toBe('#bdc3c7')
    })

    it('should have valid hex color format', () => {
      Object.values(brandColors).forEach((color) => {
        expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/)
      })
    })
  })
})

