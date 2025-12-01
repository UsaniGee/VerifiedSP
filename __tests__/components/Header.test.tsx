import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Header } from '@/components/Header'

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

describe('Header Component', () => {
  it('should render company logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Verified Sp ')
    expect(logo).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Case Studies')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('should render CTA button', () => {
    render(<Header />)
    expect(screen.getByText('Request a Consultation')).toBeInTheDocument()
  })

  it('should have mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toBeInTheDocument()
  })
})

