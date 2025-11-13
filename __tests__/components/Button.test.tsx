import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should apply default variant styles', () => {
    render(<Button>Test</Button>)
    const button = screen.getByText('Test')
    expect(button).toHaveClass('bg-primary')
  })

  it('should apply secondary variant', () => {
    render(<Button variant="secondary">Test</Button>)
    const button = screen.getByText('Test')
    expect(button).toHaveClass('bg-secondary')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Test</Button>)
    const button = screen.getByText('Test')
    expect(button).toBeDisabled()
  })

  it('should render as child component', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByText('Link Button')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', '/test')
  })
})

