
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockCountries } from '../../../constants/mock-data'
import { CountryCard } from '../card'

describe('CountryCard', () => {
    React.useLayoutEffect = React.useEffect // Fix for useLayoutEffect error in test environment
    it('renders appropriately', () => {
        render(<CountryCard country={mockCountries[0]} />)
        expect(screen.getByText(/United States/i)).toBeInTheDocument()
    })
})
